"use client";

import { useEffect, useState, useRef } from "react";
import Bubble from "../ui/bubble";
import { FAKE_DATA } from "@/public/fake";
import socket from "./socket";
function Chat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState(FAKE_DATA);
  const messageRef = useRef<HTMLInputElement>(null);
  const scrollToBottom = () => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    socket?.on("message", (message) => {
      const newChats = [...chats, message];
      setChats(newChats);
      scrollToBottom();
      console.log("Message received:", message);
    });
  }, [chats, setChats]);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const sendMessageHandler = () => {
    const newMessage = {
      id: Math.floor(Math.random() * 1000),
      message: message,
      date: new Date().toLocaleTimeString(),
    };
    socket?.emit("message", newMessage);

    setMessage("");
    scrollToBottom();
  };

  return (
    <section className="flex flex-col justify-between relative h-full">
      <div className="flex flex-col ml-auto mr-1">
        {chats.map((item) => {
          return (
            <Bubble key={item.id} message={item.message} date={item.date} />
          );
        })}
      </div>
      <div ref={messageRef} />
      <div className="flex w-[100%] sticky z-50 bottom-0 opacity-90">
        <input
          type="text"
          className="w-[100%] pl-1 text-sm text-slate-700 outline-0"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="message"
        />
        <button
          className="text-md bg-cyan-500 px-7 "
          onClick={sendMessageHandler}
        >
          Send
        </button>
      </div>
    </section>
  );
}

export default Chat;
