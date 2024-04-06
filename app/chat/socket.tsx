import { FAKE_DATA } from "@/public/fake";
import { useContext } from "react";
import { io } from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();

const socket = io(process.env.SOCKET_HOST || "");

socket.on("connection", () => {});

export default socket;
