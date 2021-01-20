const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

router.get('/',clienteController.login);
router.get('/clientes',clienteController.list);
router.post('/clientes/add',clienteController.save);
router.get('/clientes/api3',clienteController.apiterceros);
router.get('/clientes/delete/:id',clienteController.delete);
router.get('/clientes/update/:id',clienteController.edit);
router.post('/clientes/update/:id',clienteController.update);

module.exports = router;