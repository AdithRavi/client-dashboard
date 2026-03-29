import { Server } from "socket.io";

export const initSocket = (server) => {
  const io = new Server(server);

  io.on("connection", () => {
    console.log("User connected");
  });
};
