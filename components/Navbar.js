"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow-sm bg-white fixed top-0 w-full py-4 z-10">
      <div className="flex justify-between items-center max-w-6xl px-8 mx-auto">
        <Link href="/" className="text-3xl font-bold hover:opacity-70">
          BUKKIS
        </Link>
        <ul className="flex items-center gap-x-2 md:gap-x-4 text-base md:text-lg font-medium">
          <li>
            <Link href="/" className="hover:opacity-70">
              Home
            </Link>
          </li>
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
