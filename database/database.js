const fs = require('fs');

const rawData = fs.readFileSync('./database/db.json', 'utf8');
const database = JSON.parse(rawData);

module.exports = database;