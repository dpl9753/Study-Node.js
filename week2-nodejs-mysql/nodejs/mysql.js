var mysql      = require('mysql'); //mysql module 사용
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0702',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});
 
connection.end();