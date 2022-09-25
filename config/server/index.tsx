import React from 'react';
import express from 'express';
import ReactDom from 'react-dom/server';
import App from '../../src/App';
import { StaticRouter } from 'react-router-dom/server';
import chalk from 'chalk';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const { renderToString } = ReactDom;
  const element = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id='root'>${element}</div>
      <script src="/main.js"></script>
    </body>
    </html>
  `
  );
});

app.listen(3000, () => {
  console.log(`${chalk.green(`server listene on 3000 port.`)}`);
});
