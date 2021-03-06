import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "components/Modal";
import Loading from "components/MainLoading";
import BannerSlider from "components/BannerSlider";

import { useRecoilState } from "recoil";
import { modalState } from "components/states";

const Home = () => {
  const router = useRouter();
  const [modal, setModal] = useRecoilState(modalState);
  const [right, setRight] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [letter, setLetter] = useState(false);
  const [ddol2, setDdol2] = useState(false);
  const [love, setLove] = useState(false);
  const [random, setRandom] = useState(false);

  useEffect(() => {
    const getter = () => {
      window.localStorage.getItem("mdStatus")
        ? setModal(false)
        : setModal(true);
      setLoading(false);
    };
    getter();
  }, []);

  const closeModal = (e) => {
    if (e.target.value === "0713") {
      setRight(true);
      setTimeout(() => setModal(false), 4000);
      const modalObj = { md: false };
      window.localStorage.setItem("mdStatus", JSON.stringify(modalObj));
    }
  };

  const underLine = {
    backgroundImage: "linear-gradient(to right, #FB90A7 0%, #FCA2B5 100%)",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  if (isLoading) return <Loading />;

  return (
    <div className="bg-main w-full font-[ONE-Mobile-POP]">
      <Modal open={modal} close={closeModal} code={right} />
      <div className="max-w-3xl m-auto w-full min-h-screen overflow-hidden">
        <div className="py-6 sm:pb-16">
          <h1 className="w-11/12 lg:w-full m-auto font-bold text-lg sm:text-xl">
            π μ΅κ·Ό μμ
          </h1>
          <BannerSlider />
          <h1 className="w-11/12 lg:w-full m-auto font-bold text-lg sm:text-xl">
            π μ»¨νμΈ 
          </h1>
          <div className="w-11/12 lg:w-full m-auto h-px border-t-2"></div>
          <section className="block sm:flex pt-6 sm:pt-16 pb-0 sm:pb-8">
            <figure
              className="w-3/4 sm:w-2/5 m-auto cursor-pointer pb-8 sm:pb-0"
              onClick={(e) => router.push("/letter")}
              onMouseOver={(e) => setLetter(true)}
              onMouseLeave={(e) => setLetter(false)}
            >
              <div className="overflow-hidden">
                <img
                  className={
                    letter ? "animate-showExp animation-fill-forwards" : ""
                  }
                  src="images/letter_figure.png"
                />
              </div>
              <figcaption className="pt-4 text-indigo-500 font-[Vitro_core] pb-1 text-lg">
                Letter
              </figcaption>
              <div
                className={
                  letter
                    ? "-mt-2 h-[4px] animate-shimmerShort w-[60px]"
                    : "-mt-1"
                }
                style={underLine}
              />
              <summary className="pt-2 list-none text-sm">
                [νΈμ§] μ§μμ΄μ μμΌμ μΆννλ μ μμμ μ μ±μ€λ¬μ΄ νΈμ§μλλ€.
              </summary>
            </figure>
            <figure
              className="w-3/4 sm:w-2/5 m-auto cursor-pointer"
              onClick={(e) => router.push("/ddol2")}
              onMouseOver={(e) => setDdol2(true)}
              onMouseLeave={(e) => setDdol2(false)}
            >
              <div className="overflow-hidden">
                <video
                  className={
                    "transform " +
                    (ddol2 ? "animate-showExp animation-fill-forwards" : "")
                  }
                  autoPlay
                  loop
                  muted
                  poster="images/love/ddol2_temp.png"
                  src="images/ddol2_figure.mov"
                />
              </div>
              <figcaption className="pt-4 text-indigo-500 font-[Vitro_core] pb-1 text-lg">
                Ddol2 Gallery
              </figcaption>
              <div
                className={
                  ddol2 ? "-mt-2 h-[4px] animate-shimmer w-[128px]" : "-mt-1"
                }
                style={underLine}
              />
              <summary className="pt-2 list-none text-sm">
                [κ°μμ§] μ§μμ΄μ κ·μ½κ³  λ₯κΌ¬λ°λν λ°λ €κ²¬ λμ΄λ₯Ό κ°μν  μ
                μμ΅λλ€.
              </summary>
            </figure>
          </section>
          <section className="block sm:flex py-8">
            <figure
              className="w-3/4 sm:w-2/5 m-auto cursor-pointer pb-8 sm:pb-0"
              onClick={(e) => router.push("/love")}
              onMouseOver={(e) => setLove(true)}
              onMouseLeave={(e) => setLove(false)}
            >
              <div className="overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  poster="images/love/love_temp.png"
                  className={
                    "transform " +
                    (love ? "animate-showExp animation-fill-forwards" : "")
                  }
                  src="images/love_figure.mov"
                />
              </div>
              <figcaption className="pt-4 text-indigo-500 font-[Vitro_core] pb-1 text-lg">
                Love Gallery
              </figcaption>
              <div
                className={
                  love ? "-mt-2 h-[4px] animate-shimmer w-[120px]" : "-mt-1"
                }
                style={underLine}
              />
              <summary className="pt-2 list-none text-sm">
                [μ£ΌμΈκ³΅] μ§μμ΄μ μ μμμ μ€μλμ ν΄νΌ μ€ν λ¦¬λ₯Ό μΌνν  μ
                μμ΅λλ€.
              </summary>
            </figure>
            <figure
              className="w-3/4 sm:w-2/5 m-auto cursor-pointer"
              onClick={(e) => router.push("/random")}
              onMouseOver={(e) => setRandom(true)}
              onMouseLeave={(e) => setRandom(false)}
            >
              <div className="overflow-hidden">
                <img
                  className={
                    "transform " +
                    (random ? "animate-showExp animation-fill-forwards" : "")
                  }
                  src="images/random_figure.png"
                />
              </div>
              <figcaption className="pt-4 text-indigo-500 font-[Vitro_core] pb-1 text-lg">
                Random Gacha
              </figcaption>
              <div
                className={
                  random ? "-mt-2 h-[4px] animate-shimmer w-[140px]" : "-mt-1"
                }
                style={underLine}
              />
              <summary className="pt-2 list-none text-sm">
                [λ½κΈ°] κ·Έλ₯ κ°λ©΄ μμ¬μΈ μ§μμ΄λ₯Ό μν ν΄νΌν΄νΌ λλ€ κ°μ± μλλ€.
              </summary>
            </figure>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
