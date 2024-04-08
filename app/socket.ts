"use client";

import { io } from "socket.io-client";
let socket: any;
const HOST = process.env.NEXT_PUBLIC_SOCKET_HOST;

if (HOST) {
  socket = io(HOST);

  socket.on("connection", () => {
    socket.io.opts.query = {
      name: localStorage.getItem("name"),
    };
  });
}

export default socket;
