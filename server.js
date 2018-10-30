
const express = require('express');

const path = require('path');

const query = require('./modals/query.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/company/:id', (req ,res)=> {
  const id = JSON.parse(req.params.id);
  query.get(id, (err, docs) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(JSON.stringify(docs));
    }
  })

});

app.listen(port, (err) => {
  if (err) {
    console.log('Failed to connect');
  } else {
  console.log('We are live!');
  }
})
