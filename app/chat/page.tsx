"use client";

import { ChangeEvent, useState } from "react";

function Chat() {
  const [chat, setchat] = useState({
    sendMessage: "",
  });

  const onChangeChat = (e: ChangeEvent<HTMLInputElement>): void => {
    setchat({ ...chat, [e.target.name]: e.target.value });
  };

  const sendChat = () => {
    console.log(chat);
    setchat({
      sendMessage: "",
    });
  };

  return (
    <section className="flex min-h-[91vh] flex-col items-center justify-between">
      <iframe className="bg-slate-600 w-[100%] h-[80vh]">s</iframe>
      <div className="flex w-[100%]">
        <input
          type="text"
          className="w-[100%] text-slate-950 pl-1"
          name="sendMessage"
          value={chat.sendMessage.toString()}
          onChange={onChangeChat}
          id="sendMessage"
        />
        <button className="text-md bg-cyan-500 px-7" onClick={sendChat}>
          Send
        </button>
      </div>
    </section>
  );
}

export default Chat;
