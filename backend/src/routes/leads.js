const express = require('express');
const router = express.Router();
const { getClient } = require('../db/index');
const { v4: uuidv4 } = require('uuid');

// Universal webhook receiver for social leads
router.post('/webhook', async (req, res) => {
  try {
    // provider can be sent as query param or header
    const provider = req.query.provider || req.header('x-provider') || 'unknown';
    const payload = req.body;

    // basic mapping (you can extend mapProvider later)
    const lead = mapProviderToLead(provider, payload);

    const client = getClient();
    await client.connect();
    await client.query(
      `INSERT INTO leads(id,name,email,phone,source,message,interest,category,campaign,meta)
       VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [lead.id, lead.name, lead.email, lead.phone, lead.source, lead.message, lead.interest, lead.category, lead.campaign, lead.meta]
    );
    await client.end();

    return res.json({ success: true, leadId: lead.id });
  } catch(err){
    console.error('lead webhook error', err);
    return res.status(500).json({ success: false });
  }
});

function mapProviderToLead(provider, payload){
  const id = payload.id || payload.leadgen_id || uuidv4();
  const text = payload.message || payload.text || payload.question || JSON.stringify(payload);
  return {
    id: id.toString(),
    name: payload.name || payload.profile?.name || null,
    email: payload.email || null,
    phone: payload.phone || payload.msisdn || null,
    source: provider,
    message: text,
    interest: detectInterest(text),
    category: payload.category || 'inquiry',
    campaign: payload.campaign || null,
    meta: payload
  };
}

function detectInterest(text){
  if(!text) return null;
  const lower = (text+'').toLowerCase();
  if(lower.match(/pre-?order|preorder/)) return 'preorder';
  if(lower.match(/bulk|school|library|college/)) return 'bulk';
  const m = lower.match(/book[: ]+([a-z0-9 \-']{3,80})/i);
  if(m) return m[1].trim();
  return null;
}

module.exports = router;
