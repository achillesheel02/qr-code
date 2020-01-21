const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'vmaproject'
});

connection.connect(function (error) {
  if (!!error) console.log(error);
  else console.log('database connected!');
});

app.use((req,res,next) => {

});

module.exports = app;
