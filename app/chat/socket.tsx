import { FAKE_DATA } from "@/public/fake";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

socket.on("connection", (message) => {
  console.log(message);
});

export default socket;

socket.on("message", (message) => {
  console.log("message");
  FAKE_DATA.push(message);
});
