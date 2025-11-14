const express = require('express');
const router = express.Router();

const ADMIN_SECRET = process.env.ADMIN_SECRET || '';

router.get('/health', (req, res) => res.json({ ok: true }));

router.use((req, res, next) => {
  const s = req.header('x-admin-secret');
  if(!ADMIN_SECRET || s !== ADMIN_SECRET) return res.status(401).json({ error: 'unauthorized' });
  next();
});

router.post('/books/create', (req, res) => {
  res.json({ success: true, info: 'admin create endpoint will be implemented' });
});

module.exports = router;
