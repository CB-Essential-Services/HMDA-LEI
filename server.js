const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const ordersRouter = require('./routes/ordersRouter');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/orders', ordersRouter);

app.listen(3000, () => console.log('server running'));
