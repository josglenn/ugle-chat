import { FAKE_DATA } from "@/public/fake";
import { useContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

socket.on("connection", () => {});

export default socket;
