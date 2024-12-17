const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

let client;

function initializeBot() {
    if (client) return;

    client = new Client({
        authStrategy: new LocalAuth()
    });

    client.on('qr', qr => {
        console.log('QR RECEIVED', qr);
        qrcode.generate(qr, { small: true });
    });

    client.on('ready', () => {
        console.log('Serviço do zipt zopt tá ON!');
    });

    client.initialize();
}

initializeBot();

module.exports = { client, initializeBot };
