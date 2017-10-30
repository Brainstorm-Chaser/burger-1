var mysql = require('mysql');

// var connection = mysql.createConnection({
//   port: 3306,
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'burger_db'
// });

//  mysql://b25f5f51735c83:3aa74aac@us-cdbr-iron-east-05.cleardb.net/heroku_44781f3abe4cedc?reconnect=true
var connection = mysql.createConnection({
  // port     : 3306,
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  database : 'heroku_28437b49d76cc53',
  user     : 'b25f5f51735c83',
  password : '3aa74aac'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
