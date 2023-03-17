const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors");
const PORT = process.env.PORT || 8900;
const app = express();

var corsOption = {
  origin: "#",
  optionsSuccessStatus: 200,
};
app.use(cors({ corsOption }));

const server = app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});

const io = require("socket.io")(server, {
  cors: {
    origins: "*:*",
    methods: ["GET", "POST"],
  },
});
let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when connect
  console.log(" a user connected. ");
  //io.emit("welcome","hello this is socket server");
  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });
  // send and get message

  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    console.log(senderId, receiverId, text);
    const user = getUser(receiverId);
    console.log(user);
    user &&
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnect");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
