const express = require('express');
const path = require("path");
const config = require("./config");
const r = require("rethinkdb");
const router = require("./router");

const publicPath = path.resolve(__dirname, "../public");

const app = express();

r.connect(config.rethinkdb, (err, conn) => {
  if (err) {
    console.log('Could not connect to rethinkdb.');
    console.log(err.message);
  }
  else {
    console.log('Connection successful.');
  }
});

app.use("/", express.static(publicPath));
app.use("/api", router);

app.listen(config.PORT, config.HOST);
console.log(`Running on http://${config.HOST}:${config.PORT}`);
