var express = require('express');
var cors = require('cors');
var Server = require("socket.io");
var bodyParser = require('body-parser');
var app = express();

const corsOptions = {
    origin: '*',
    method: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    exposedHeaders: [

        'Autorization',
        'X-Requested-With',
        'Content-Type',
        'Cache-Control:no-cache',
        'Access-Control-Allow-Origin:*'
    ],
    preflightContinue: true,

};


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors(corsOptions));
var server  = app.listen(80,()=>{
    console.log("Server ON");
})

const io = Server(server,{
    mode:'no-cors',
    origin:'*',
    cors:{
        origin:["*", "http://127.0.0.1:5501","http://127.0.0.1:5500"],
        methods: ["GET", "POST"],
       
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


});
