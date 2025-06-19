const config = require('./configuracion');
const mongoose = require('mongoose');


module.exports = {
    connection: null,
    connect: () => {
        if(this.connection) return this.connection
       return mongoose.connect(config.DB)
            .then(conn =>{
                this.connection= conn
                console.log('Conectado a la base de datos')}
    )
            .catch(e => {
                console.log(`$Error al conectar a la base de datos ${e}`)
            });
    }
            
}
