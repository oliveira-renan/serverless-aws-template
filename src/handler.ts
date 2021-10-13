import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as serverless from 'serverless-http';

const app = express();

app.use(bodyParser.json({ strict: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

// eslint-disable-next-line import/prefer-default-export
export const handler = serverless(app);
