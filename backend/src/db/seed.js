const { getClient } = require('./index');
const { v4: uuidv4 } = require('uuid');

const sampleBooks = [
  {
    id: 'b1',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    price: 199,
    currency: 'INR',
    cover_url: 'https://via.placeholder.com/300x450?text=Little+Prince',
    description: 'A poetic tale about a young prince and the universe.',
    stock: 10,
    slug: 'the-little-prince'
  },
  {
    id: 'b2',
    title: 'Educated',
    author: 'Tara Westover',
    price: 399,
    currency: 'INR',
    cover_url: 'https://via.placeholder.com/300x450?text=Educated',
    description: 'A memoir about family, loss, and the transformative power of education.',
    stock: 8,
    slug: 'educated-tara-westover'
  }
];

async function seed(){
  const client = getClient();
  await client.connect();
  try {
    for(const b of sampleBooks){
      await client.query(
        `INSERT INTO books(id,title,author,price,currency,cover_url,description,stock,slug)
         VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
         ON CONFLICT (id) DO NOTHING`,
        [b.id,b.title,b.author,b.price,b.currency,b.cover_url,b.description,b.stock,b.slug]
      );
    }
    console.log('Seed complete');
  } catch(err){
    console.error('Seeding failed', err);
  } finally {
    await client.end();
  }
}

seed();
