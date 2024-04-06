import React from "react";

interface bubbleProps {
  message: string;
  date: string;
}

function Bubble({ message, date }: bubbleProps) {
  return (
    <div className="flex w-auto flex-col justify-between text-right rounded-sm bg-cyan-500 m-1 pt-1 px-1">
      <p className="text-sm">{message}</p>
      <span className="text-[7px] text-slate-300">Sent on {date}</span>
    </div>
  );
}

export default Bubble;
