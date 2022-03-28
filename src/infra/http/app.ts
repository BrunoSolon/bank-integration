import express from 'express';
import cors from 'cors';

import { router } from './routes';

const app = express();

const origin = {
  origin: '*'
};

app.use(cors(origin));
app.use('/api', router);

app.use((req, res) => {
  res.status(404).json();
});

export { app };
