import dotenv from 'dotenv-safe';
import express from 'express';
import add from './math/add';

dotenv.config();

const app = express();

app.get('/hello', (req, res) => {
  res.send(`hello world!! from ${process.env.APP_NAME} ${add(1, 2)}`);
});

app.listen(3000);
