const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'client/dist')));
// app.use(express.static('client/dist'));

app.get('/hahahaha', (req ,res)=> {
      res.status(200).send();
});

app.listen(port, (err) => {
  if (err) {
    console.log('Failed to connect');
  } else {
  console.log('We are live!');
  }
})
