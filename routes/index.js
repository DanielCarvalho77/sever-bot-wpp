const bodyParser = require('body-parser');
const wpp = require('./wppRoute');

module.exports = app => {
    app.use(bodyParser.json());

    app.use(wpp);
}
