const Pool = require("pg").Pool;
const pool = new Pool({
  user: "tester",
  host: "localhost",
  database: "crime",
  password: "stagvtol56",
  port: 5432,
});

const getCrimeData = (req, res) => {
  pool.query("SELECT * FROM crimedata ORDER BY id ASC", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

module.exports = {
  getCrimeData,
};
