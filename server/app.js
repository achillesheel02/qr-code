const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Guest = require('./models/guest');


mongoose.connect('mongodb+srv://admin:simple@cluster0-380df.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log("Database connected!")
  })
.catch(()=> {
  console.log("Connection failed")

});

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/signup", (req, res, next) => {
  const guest = new Guest({
    fullname: req.body.fullname,
    gender: req.body.gender,
    idnumber: req.body.idnumber,
    phoneno: req.body.phoneno,
    email: req.body.email,
    barcode: req.body.barcode
  });
  guest.save();
  console.log(guest);
  res.status(201).json({
    message: 'Guest uploaded successfully'
  });
});

module.exports = app;
