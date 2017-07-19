var mysql = require('mysql');

/*var express = require('express');
var app = express();*/

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'Wrongekira80',
  database : 'calendarevents'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  //console.log('The solution is: ', rows[0].solution);

  console.log("Bağlantı kuruldu...")
  /*connection.query('DESCRIBE events', function(err, result){
  	if (err) throw err
  	console.log(result)
  })

})
/*app.listen(3000);
console.log('Listening on 3000');*/
//connection.end()