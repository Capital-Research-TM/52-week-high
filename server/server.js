const express = require('express');
const app = express();
const fakeData = require('../db/dbSeed.js');
const faker = require('faker');
const port = 3000;

app.use(express.static('client'));

app.get('/', (req ,res)=> {
    console.log('success')
      res.status(200).send();
});

// app.post();

app.listen(3000, (err) => {
  if (err) {
    console.log('Failed to connect');
  } else {
  console.log('We are live');
  }
})
