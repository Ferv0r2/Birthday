import React from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <header className="w-full bg-white sticky top-0 border-b-2 z-50">
      <div className="max-w-3xl w-10/12 md:w-full m-auto">
        <nav className="flex w-full pt-3 pb-1 items-center justify-between">
          <img
            className="cursor-pointer"
            src="images/logo.png"
            onClick={(e) => router.push("/")}
          />
          {/* <Link href="/">
            <div className="flex items-center cursor-pointer hover:font-bold hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <p className="hidden sm:block pl-2 w-12">Home</p>
            </div>
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
