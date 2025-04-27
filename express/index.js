
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Full Stack Developer!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
})