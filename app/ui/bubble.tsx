import React from "react";

interface bubbleProps {
  message: string;
  date: string;
  senderName?: string;
}

function Bubble({ message, date, senderName }: bubbleProps) {
  const userName = localStorage.getItem("name");
  return (
    <div className="flex w-auto flex-col justify-between text-right rounded-sm bg-cyan-500 m-1 pt-1 px-1">
      <span className="text-xs  text-slate-50">
        {senderName ? (senderName === userName ? "Me" : `@${senderName}`) : ""}
      </span>
      <p className="text-sm">{message}</p>
      <span className="text-[7px] text-slate-300">Sent on {date}</span>
    </div>
  );
}

export default Bubble;
