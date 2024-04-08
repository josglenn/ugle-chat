"use client";

import { useEffect, useState, useRef } from "react";
import Bubble from "../ui/bubble";
import { IChat } from "@/public/fake";
import socket from "../socket";
function Chat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<IChat[] | []>([]);
  const [userName, setUserName] = useState<string | null>(null);
  const [isSomeoneTyping, setIsSomeoneTyping] = useState(false);
  const [typingActivity, setTypingActivity] = useState({
    name: "",
    isTyping: false,
  });
  const messageRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    socket?.on("message", (message: IChat) => {
      const newChats = [...chats, message];
      setChats(newChats);
    });
  }, [chats]);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUserName(name);
  }, []);

  useEffect(() => {
    socket?.on(
      "someone-is-typing",
      (activity: { isTyping: boolean; name: string }) => {
        const { isTyping: ac } = activity;
        setIsSomeoneTyping(ac);
        setTypingActivity(activity);
        setTimeout(() => setIsSomeoneTyping(false), 5000);
      }
    );
  }, []);

  const sendMessageHandler = () => {
    const name = localStorage.getItem("name");
    const newMessage = {
      id: Math.floor(Math.random() * 1000),
      message: message,
      socketID: socket?.id,
      senderName: name,
      date: new Date().toLocaleTimeString(),
    };
    socket?.emit("message", newMessage);

    setMessage("");
    scrollToBottom();
  };

  const typinghandler = ({ isTyping }: { isTyping: boolean }) => {
    const typingActivity = {
      name: localStorage.getItem("name"),
      isTyping: isTyping,
    };
    socket?.emit("someone-is-typing", typingActivity);
  };

  return (
    <section className="flex flex-col justify-between relative h-full">
      <div className="flex flex-col mr-1">
        {chats.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                userName === item.senderName ? "ml-auto" : "mr-auto"
              }`}
            >
              <Bubble
                senderName={item.senderName}
                message={item.message}
                date={item.date}
              />
            </div>
          );
        })}
      </div>

      <div ref={messageRef} />
      <span>
        {isSomeoneTyping && typingActivity?.name !== userName
          ? `${typingActivity.name} is Typing`
          : ""}
      </span>
      <div className="flex w-[100%] sticky z-50 bottom-0 opacity-90">
        <input
          type="text"
          className="w-[100%] pl-1 text-sm text-slate-700 outline-0"
          name="message"
          onKeyDown={() => typinghandler({ isTyping: true })}
          // onBlur={() => typinghandler({ isTyping: false })}
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
