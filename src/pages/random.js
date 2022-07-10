import React, { useState, useEffect } from "react";
import Gacha from "components/Gacha";
import Loading from "components/Loading";

const Random = () => {
  const [todo, setTodo] = useState(false);
  const [isStart, setStart] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getter = () => {
      window.localStorage.getItem("randomStatus")
        ? setTodo(false)
        : setTodo(true);
      setLoading(false);
    };
    getter();
  }, []);

  const clickBtn = (e) => {
    setStart(1);
  };

  const finishBtn = (e) => {
    setTimeout(() => {
      setStart(2);
    }, 2000);
  };

  const initBtn = (e) => {
    setStart(0);
    alert("생일축하해 ㅎㅅㅎ");
    const modalObj = { random: true };
    window.localStorage.setItem("randomStatus", JSON.stringify(modalObj));
  };

  const stat = [
    "추첨을 위해 시작 버튼을 눌러주세요",
    "추첨중입니다 . . .",
    "추첨이 완료되었습니다 !",
  ];

  if (isLoading) return <Loading />;

  return (
    <div className="bg-zinc-100">
      <div className="max-w-3xl m-auto w-full min-h-screen">
        <section className="relative py-6 sm:py-16">
          <h1 className="w-11/12 lg:w-full m-auto font-bold text-lg sm:text-xl">
            🍀 랜덤 룰렛
          </h1>
          <Gacha click={clickBtn} fin={finishBtn} status={todo} />

          {isStart == 2 && todo ? (
            <div className="fixed w-full animate-show top-24 left-1/2 transform -translate-x-1/2 text-center">
              <div className="w-10/12 sm:w-[28rem] m-auto bg-red-50 border-4 border-red-500 rounded-lg px-4 py-16">
                <p className="font-[GmarketSansBold] text-2xl sm:text-4xl">
                  🎉 축하합니다 🎉
                </p>
                <img
                  className="w-2/3 rounded-full py-8 m-auto"
                  src="images/item/win.png"
                />
                <p className="w-10/12 m-auto font-[GmarketSansMedium] text-base sm:text-lg pb-8">
                  [각인/선물포장] 미스 디올 블루밍 부케오 드 뚜왈렛 30ML 당첨!!
                </p>
                <button
                  className="p-2 w-24 m-auto text-white rounded-xl bg-red-400 font-[GmarketSansBold]"
                  onClick={initBtn}
                >
                  닫기
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <p className="-mt-12 sm:-mt-20 text-center font-[GmarketSansMedium] text-sm sm:text-lg pb-12">
            {todo
              ? "버튼을 누르고 3초 뒤에 결과가 결정됩니다 😘"
              : "이미 추첨을 완료했습니다 😘"}
          </p>

          <h1 className="w-11/12 lg:w-full m-auto font-bold text-lg sm:text-xl">
            🎠 룰렛 상태
          </h1>
          <div className="w-11/12 lg:w-full m-auto h-px border-t-2"></div>
          <div className="py-24 font-[GmarketSansBold] text-3xl sm:text-4xl text-center">
            {todo ? (
              <p className="w-10/12 m-auto">{stat[isStart]}</p>
            ) : (
              <p className="w-10/12 m-auto">{stat[2]}</p>
            )}
          </div>
          <h1 className="w-11/12 lg:w-full m-auto font-bold text-lg sm:text-xl">
            📑 자료 출처
          </h1>
          <div className="w-11/12 lg:w-full m-auto h-px border-t-2"></div>
          <div>
            <img
              className="w-11/12 m-auto py-12"
              src="images/item/wish.jpg"
              alt="wish"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Random;
