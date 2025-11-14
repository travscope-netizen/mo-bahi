const express = require('express');
const router = express.Router();
const { getClient } = require('../db/index');

// list books with optional ?q= search
router.get('/', async (req, res) => {
  const q = req.query.q || '';
  const client = getClient();
  await client.connect();
  try {
    const sql = q ?
      `SELECT * FROM books WHERE title ILIKE $1 OR author ILIKE $1 ORDER BY created_at DESC LIMIT 100` :
      `SELECT * FROM books ORDER BY created_at DESC LIMIT 100`;
    const params = q ? [`%${q}%`] : [];
    const r = await client.query(sql, params);
    res.json({ data: r.rows });
  } catch(err){
    console.error(err);
    res.status(500).json({ error: 'server error' });
  } finally {
    await client.end();
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const client = getClient();
  await client.connect();
  try {
    const r = await client.query('SELECT * FROM books WHERE id=$1 OR slug=$1 LIMIT 1', [id]);
    if(r.rowCount === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ data: r.rows[0] });
  } catch(err){
    console.error(err);
    res.status(500).json({ error: 'server error' });
  } finally {
    await client.end();
  }
});

module.exports = router;
