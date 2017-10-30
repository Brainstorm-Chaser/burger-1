var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burger_db'
  });
}

//  JAWSDB data: 
//  mysql://oh4eaxfrppnebdz3:qbjrdul34mtxgr0l@bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lxom1nolscwa8q4w
// var connection = mysql.createConnection({
//   port     : 3306,
//   host     : 'bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   database : 'lxom1nolscwa8q4w',
//   user     : 'oh4eaxfrppnebdz3',
//   password : 'qbjrdul34mtxgr0l'
// });

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
