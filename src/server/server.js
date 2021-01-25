const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const cards = require('./cards');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/cards', (req, res) => {
  res.json(cards);
});

app.post('/cards', (req, res) => {
  try {
    cards.push(req.body);
    return res.status(200).json({
      message: 'New card is registered successfully.'
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Failed to register a new card.'
    });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
