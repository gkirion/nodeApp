var mysql = require('mysql')
var connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'diaxeirisiExodon',
    password: 'diaxeirisiExodon',
    database: 'diaxeirisi_exodon'
  }
)

connection.connect()

module.exports = connection;
