const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 4000 );

app.use(require('../routes'));

module.exports =  app;