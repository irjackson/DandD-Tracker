const { Pool } = require('pg');
const URI = 'postgres://qxwgadoz:mPgsQZXTuH5MBiTAvMG7tOAYF-PlKbz0@heffalump.db.elephantsql.com/qxwgadoz';

const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};