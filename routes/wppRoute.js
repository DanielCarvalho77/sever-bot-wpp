const { Router } = require('express');
const wpp = require('../controllers/WppController');

const router = Router();

router.post('/authenticateByWhatsApp', wpp.authenticateByWhatsApp);

module.exports = router;
