const express = require('express');
const routes = require('./routes');
const botWpp = require('./service/bot-wpp');

const app = express();

const port = 3000;

routes(app);

botWpp.initializeBot();

app.listen(port, () => console.log(`Servidor tá rodando o/ ${port}`));

module.exports = app;
