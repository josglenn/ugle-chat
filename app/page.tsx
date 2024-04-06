"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  const startChat = () => {
    localStorage.setItem("name", name);
    router.push("/chat");
  };

  return (
    <section className="flex min-h-screen flex-col justify-center items-center  p-24 gap-3">
      <h1 className="text-6xl font-bold">
        U<span className="text-cyan-500">g</span>le
      </h1>
      <p className="text-sm text-center">
        Hi this is Ugle! Try to chat with random stranger
      </p>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        className="text-slate-950 text-center"
        placeholder="Your Name"
      />
      <button
        className={`text-md text-center ${
          !name.length ? "bg-slate-600" : "bg-cyan-500"
        } cursor-pointer rounded-md px-3 py-2`}
        disabled={!name.length}
        onClick={startChat}
      >
        Start to Chat!
      </button>
    </section>
  );
}
