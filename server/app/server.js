const express = require('express');
const path = require("path");
const config = require("./config");
const r = require("rethinkdb");
const router = require("./router");
const http = require("http");
const WebSocket = require("ws");


const publicPath = path.resolve(__dirname, "../public");

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({server});

r.connect(config.rethinkdb, (err, conn) => {
  if (err) {
    console.log('Could not connect to rethinkdb.');
    console.log(err.message);
  }
  else {
    wss.on('connection', (ws) => {

      ws.on('message', (message) => {
        console.log("received ", message);

        r.table('messages').insert([
          {content: message}
        ]).run(conn, function(err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2));
        })

        wss.clients.forEach(function each(client) {
          client.send(JSON.stringify({message: message, fromMe: ws === client}));
        })

      })

      //send immediatly a feedback to the incoming connection    
      ws.send('Hi there, I am a WebSocket server');
    })
  }
});


app.use("/", express.static(publicPath));
app.use("/api", router);

server.listen(config.PORT, () => {
  console.log('COnnected ');
});

console.log(`Running on http://${config.HOST}:${config.PORT}`);
