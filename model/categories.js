var connection = require('../db_connection');


exports.load = function load(res) {
  connection.query('select * from category', (err, rows, fields) => {
    if (err) throw err
    res.send(rows)
  })
}



