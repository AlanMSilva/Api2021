const controller ={};

controller.login =(req,res)=>{
    res.render('login');
    res.redirect('/clientes');
}
controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{//metodo que sirve para pedir una conexion a mysql
        conn.query('SELECT * FROM clientes',(err,clientes)=>{
            if(err){
                res.json(err);
            }
            res.render('clientes',{//pintar en el navegador una vista renderisar clientes
                data: clientes
            });
        });
    });
    
}
controller.save = (req,res)=>{//lo que hace es que cuando nosotros tratemos de recibir  un dato vamos a tratar de recibirlo desde una propiedad del objeto request llamado body
    const data = req.body; 

    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO clientes set ?',[data],(err,cliente)=>{//conexion y le insertamos estos datos que recibo del frontend y le voy a decir a que talba le voy a insertar y que datos
            res.redirect('/clientes');
        });
    });
};
controller.apiterceros =(req,res)=>{
    res.render('api3');
    res.redirect('/clientes/api3');
}
controller.edit =(req,res)=>{//mandamos a que renderise la pagina de clienteEdit y hacemos que los valores que obtubo los imprima en los input
    const {id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM clientes WHERE id = ?',[id],(err,cliente)=>{
            res.render('clienteEdit',{
                data:cliente[0]
            });
        });
    });
};

controller.update =(req,res)=>{//con los datos que estamos recibiendo un parametro y los campos del formulario
    const {id} = req.params;
    const newCliente = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE clientes set ? WHERE id = ?',[newCliente,id,],(err,rows)=>{
            res.redirect('/clientes');
        });
    });
};

controller.delete = (req,res)=>{ 
    const {id} = req.params;//obtenemos el id
req.getConnection((err,conn)=>{
    conn.query('DELETE FROM clientes WHERE id = ?',[id],(err,rows)=>{//eliminamos el cliente con el id que le enviamos
        res.redirect('/clientes');//redericcionamos a la pagina principal
        });
    });
};

module.exports = controller;