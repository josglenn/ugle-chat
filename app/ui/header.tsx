import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="flex sticky top-0 z-50 flex-row justify-between p-2 opacity-90 bg-slate-950">
      <Link href={"/"} className="text-2xl font-bold">
        U<span className="text-cyan-500">g</span>le
      </Link>
      <nav>
        <ul>
          <li className="text-sm bg-cyan-400 p-1 px-4 rounded-sm">Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
