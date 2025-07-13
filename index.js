var express = require('express');
var Server = require("socket.io");
var bodyParser = require('body-parser');
var app = express();

var server  = app.listen(7000,()=>{
    console.log("Server ON");
})

const io = Server(server,{
    mode:'no-cors',
    cors:{
        origin:"*",
        credential: true
    }
});
app.set('io', io);
io.on('connection', function(socket){
	console.log('Usuário conectou');
    socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

    socket.on('msgParaServidor', (data)=>{
        console.log(data)
        socket.emit('msgParaCliente',{nome:'Leonardo 2'})
     });


})