const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL;
if(!DATABASE_URL){
  console.error('Missing DATABASE_URL in environment');
  process.exit(1);
}

function getClient(){
  return new Client({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } });
}

module.exports = { getClient };
