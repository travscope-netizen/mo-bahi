require('dotenv').config();
const express = require('express');
const cors = require('cors');

const booksRouter = require('./routes/books');
const leadsRouter = require('./routes/leads');
const adminRouter = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());

// health
app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api/books', booksRouter);
app.use('/api/leads', leadsRouter);
app.use('/api/admin', adminRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Mo Bahi backend running on port ${PORT}`));
