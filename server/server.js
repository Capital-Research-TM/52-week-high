const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'));

app.get('/', (req ,res)=> {
      res.status(200).send();
});

app.listen(3000, (err) => {
  if (err) {
    console.log('Failed to connect');
  } else {
  console.log('We are live!');
  }
})
