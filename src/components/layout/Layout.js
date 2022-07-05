import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import SEO from "components/layout/SEO";
import Nav from "components/layout/Nav";

import { useRecoilState } from "recoil";
import { scrollState, scrollBtnState } from "components/states";

const Layout = ({ children }) => {
  const [scroll, setScroll] = useRecoilState(scrollState);
  const [scrollBtn, setScrollBtn] = useRecoilState(scrollBtnState);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  const handleFollow = () => {
    setScroll(window.pageYOffset);
    if (scroll > 100) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  };

  const toUp = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScroll(0);
    setScrollBtn(false);
  };
  return (
    <>
      <SEO />
      <Nav />
      <ReactPlayer
        className="absolute top-0 left-0 hidden"
        playing
        loop
        url={[
          { src: "music/can_i_love.mp3", type: "audio/mp3" },
          { src: "music/polaroid.mp3", type: "audio/mp3" },
          { src: "music/pink.mp3", type: "audio/mp3" },
          { src: "music/get.mp3", type: "audio/mp3" },
          { src: "music/gimme.mp3", type: "audio/mp3" },
          { src: "music/ride.mp3", type: "audio/mp3" },
          { src: "music/fantasy.mp3", type: "audio/mp3" },
          { src: "music/gravity.mp3", type: "audio/mp3" },
        ]}
      />
      <main>{children}</main>
      {scrollBtn ? (
        <div className="sticky right-8 bottom-8">
          <div className="absolute right-8 bottom-0 justify-center items-start">
            <img
              className="toUp relative w-14 h-14 cursor-pointer"
              src="/images/onTop.png"
              onClick={(e) => toUp()}
            />
            <p className="text-gray-500 text-center text-sm font-[GmarketSansBold]">
              On Top
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Layout;
