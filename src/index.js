// INCLUDING
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);


io.on("connection" , socket =>{
  console.log("New User Connected");
});

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));


// STARTING SERVER
server.listen(88, ()=>{
  console.log("Server running in port 88");
});