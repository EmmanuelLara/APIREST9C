const express = require('express');
const router = express.Router();
const joyasController = require('../controllers/joyascontroller');


router.get('/', 
    joyasController.buscarTodo
);


module.exports = router;