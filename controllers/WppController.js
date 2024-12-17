const botWpp = require("../service/bot-wpp");

class WppController {
    static async authenticateByWhatsApp(req, res) {
        try {
            const { cellPhoneNumber } = req.body;

            const cellPhoneNumberLength = 12;
    
            if (cellPhoneNumber.length !== cellPhoneNumberLength) {
                return res.status(404).json({ message: 'Número inválido' });
            }

            const codeTwoFat = 
            Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)).join('');

            let messageForUser = `*Esse é seu código de autenticação:* ${codeTwoFat}`;

            const userWhatapp = `${cellPhoneNumber}@c.us`;

            await botWpp.client.sendMessage(userWhatapp, messageForUser);

            return res.status(200).json({});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = WppController;
