import dotenv from 'dotenv-safe';
import express from 'express';

dotenv.config();

const app = express();

app.get('/hello', (req, res) => {
  res.send(`hello world!! from ${process.env.APP_NAME}`);
});

app.listen(3000);
