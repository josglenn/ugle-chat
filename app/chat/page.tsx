"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import Bubble from "../ui/bubble";
import { FAKE_DATA } from "@/public/fake";
import socket from "./socket";
function Chat() {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState<any>([]);

  function sendMessageHandler(): void {
    const newMessage = {
      id: Math.floor(Math.random() * 1000),
      message: message,
      date: new Date().toLocaleTimeString(),
    };
    socket?.emit("message", newMessage);
    console.log(message);
    console.log(socket);
    setMessage("");
  }

  const chatMemoized = useMemo(() => {
    return FAKE_DATA;
  }, []);

  return (
    <section className="flex flex-col justify-between relative h-full">
      <div className="flex flex-col ml-auto mr-1">
        {chatMemoized.map((item) => {
          return (
            <Bubble key={item.id} message={item.message} date={item.date} />
          );
        })}
      </div>
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
