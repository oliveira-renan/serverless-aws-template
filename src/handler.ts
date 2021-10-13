import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as serverless from 'serverless-http';
import { SQS } from 'aws-sdk';

const app = express();
const sqs = new SQS();

app.use(bodyParser.json({ strict: false }));

app.get('/', (req, res) => {
  res.send('Hello World');

  sqs.sendMessage({
    MessageBody: req.body,
    QueueUrl: process.env.QUEUE_URL,
  });
});

// eslint-disable-next-line import/prefer-default-export
export const handler = serverless(app);
