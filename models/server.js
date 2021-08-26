const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //Middlewares
        this.middrewares();
        //Rutas de mi Aplicación

        //Parseo y lectura del body
        this.app.use(express.json());


        this.routes();
    }

    middrewares(){
        //cors
        this.app.use(cors());
        //Directorio Público
        this.app.use( express.static('public'));
    }

    routes(){
       this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port , ()=>{
            console.log("Servidor corriendo en puerto", this.port);
        })
    }
}

module.exports = Server;

