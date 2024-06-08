const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"rajalaxmi@02",
    host:"localhost",
    port:5432,
    database:"work-report"
});
module.exports = pool;