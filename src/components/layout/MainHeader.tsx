import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const MainHeader = () => {
  return (
    <header className="bg-zinc-800 text-gray-100 py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <nav>
            <ul className="flex gap-10 text-lg">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
