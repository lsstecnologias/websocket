const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 8181 });


wss.on('connection', function connection(ws) {

    console.log('Client connected');


    ws.on('message', function incoming(message) {

        console.log('Received: %s', message);

       // ws.send(`${message}`);
    });


    ws.on('close', function () {
        console.log('Client disconnected');
    });
});