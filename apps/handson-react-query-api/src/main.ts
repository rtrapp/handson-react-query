/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(cors())

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to handson-react-query-api!' });
});

app.post('/api/login', (req, res) => {
  res.send({ authToken: 'FakeToken' });
});


app.get('/api/loop', (req, res) => {
  res.send({ dateTime: new Date().toISOString() });
});

app.get('/api/guid', (req, res) => {
  res.send({ guid: uuidv4() });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
