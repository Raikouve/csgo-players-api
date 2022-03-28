const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'toni',
  password: 'turtle171',
  host: 'localhost',
  database: 'csgo',
});

module.exports = connection;