const mongoose = require('mongoose');
const joyasesquema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        length: 50
    },
      descripcion: {
        type: String,
        required: true,
        length: 200
    },
    precio: {
        type: Number,
        required: true,

    },
   
    peso:{
        type: Number,
        required: true,
        
    },
   Stock: {
        type: Number,
        default: 10,
        
    },
   
});

const joyasModel = mongoose.model('joyas', joyasesquema);
module.exports = joyasModel;