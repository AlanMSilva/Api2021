const express = require('express');
const path = require('path');//une directorios
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');//me deja conectar la bd atraves del middleware que cree

const app = express();

//importar rutas
const clienteRoutes = require('./routes/cliente');
const { urlencoded } = require('express');

//configuraciones
app.set('port', process.env.PORT || 3000);//revise si hay un puerto si no usar el puerto 3000
app.set('view engine', 'ejs');//motor de platillas
app.set('views',path.join(__dirname,'views'));//le indico donde esta la carpeta views

//middlewares (los middlewares son funciones que se ejecutan antes de que vengan las peticiones de los usuarios) 
app.use(morgan('dev'));//registras las peticiones que llegan con morgan
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'dbapi'
},'single'));//como nos vamos a conectar al servidor
app.use(express.urlencoded({extended: false}))//desde el modulo de express estamos requiriendo un metodo que nos permite  poder entender todos los datos que vengan desde el formmulario y le damos de configuracion extend false porque no nos van a enviar imagenes  ni datos codigicados etc.
 
//rutas
app.use('/',clienteRoutes);


//iniciando el servidor
app.listen(app.get('port'), () =>{
    console.log('servidor en puerto 3000');
});