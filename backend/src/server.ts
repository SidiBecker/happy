import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (req, resp) => {
  return resp.send({ message: 'teste' });
});

app.listen(3333);
