import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Nav = () => {
  const router = useRouter();

  return (
    <header className="w-full bg-white sticky top-0 border-b-2 z-50">
      <div className="max-w-3xl w-10/12 lg:w-full m-auto">
        <nav className="flex w-full pt-3 pb-1 items-center justify-between">
          <img
            className="cursor-pointer"
            src="images/logo.png"
            onClick={(e) => router.push("/")}
          />

          <p
            className="hidden sm:block cursor-pointer font-[GmarketSansMedium] hover:text-pink"
            onClick={(e) => router.push("/")}
          >
            🏠 Home
          </p>
          <p
            className="block sm:hidden cursor-pointer font-[GmarketSansMedium] hover:text-pink"
            onClick={(e) => router.push("/")}
          >
            🏠
          </p>
          <ReactPlayer
            className="absolute hidden"
            width={"240px"}
            height={"80px"}
            playing
            controls
            loop
            url={[{ src: "music/can_i_love.mp3", type: "audio/mp3" }]}
          />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
