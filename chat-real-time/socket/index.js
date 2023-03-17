const io = require("socket.io")(process.env.PORT || 8900, {
  cors: {
    origins: "*",
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
  console.log(" a user connected. ", process.env.PORT);
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
