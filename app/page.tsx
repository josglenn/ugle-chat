import Link from "next/link";
import { inter, lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col justify-center items-center  p-24 gap-3">
      <h1 className="text-6xl font-bold">
        U<span className="text-cyan-500">g</span>le
      </h1>
      <p className="text-sm text-center">
        Hi this is Ugle! Try to chat with random stranger
      </p>
      <Link
        href={"/chat"}
        className="text-md text-center bg-cyan-500 rounded-md px-3 py-2"
      >
        Start to Chat!
      </Link>
    </section>
  );
}
