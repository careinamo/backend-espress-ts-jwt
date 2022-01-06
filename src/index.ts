import express from 'express';

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function (req, res) {
  res.send('hello world!!')
})

app.listen(3000, () => {
  console.log('server running on port 3000');
});