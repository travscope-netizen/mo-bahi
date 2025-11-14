const fs = require('fs');
const path = require('path');
const { getClient } = require('./index');

async function migrate(){
  const client = getClient();
  await client.connect();
  const sql = fs.readFileSync(path.join(__dirname,'migrations','001_create_tables.sql')).toString();
  try {
    await client.query(sql);
    console.log('Migration applied.');
  } catch(err){
    console.error('Migration failed', err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

migrate();
