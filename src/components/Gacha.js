import React, { useState, useRef } from "react";
import Slider from "react-slick";

const Gacha = ({ click, fin, status }) => {
  const [isStart, setStart] = useState(0);

  const slider = useRef(null);

  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    autoPlay: false,
    fade: true,
    arrows: false,
    draggable: false,
  };

  return (
    <div className="w-11/12 m-auto pt-2 pb-16 relative z-0">
      <Slider ref={slider} {...settings}>
        <div>
          <img src="images/item/wish4.jpg" alt="content" />
        </div>
        <div>
          <img src="images/item/wish5.jpg" alt="content" />
        </div>
        <div>
          <img src="images/item/wish1.png" alt="content" />
        </div>
        <div>
          <img src="images/item/wish6.jpg" alt="content" />
        </div>
        <div>
          <img src="images/item/wish1.png" alt="content" />
        </div>
        <div>
          <img src="images/item/wish7.jpg" alt="content" />
        </div>
        <div>
          <img src="images/item/wish8.jpg" alt="content" />
        </div>
        <div>
          <img src="images/item/wish9.jpg" alt="content" />
        </div>
      </Slider>
      <div className="w-full m-auto py-2 sm:py-8 items-center text-center text-sm sm:text-base">
        {isStart == 0 ? (
          <button
            className="p-2 sm:p-3 w-24 sm:w-32 m-auto text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 font-[GmarketSansBold]"
            onClick={() => {
              if (!status)
                return alert("이미 추첨을 완료했으니 후후.. 안됩니당");
              click();
              setStart(1);
              slider.current.slickPlay();
            }}
          >
            시작
          </button>
        ) : (
          ""
        )}
        {isStart == 1 && status ? (
          <button
            className="p-2 sm:p-3 w-24 sm:w-32 m-auto text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 font-[GmarketSansBold]"
            onClick={() => {
              setStart(2);
              setTimeout(() => {
                fin();
                slider.current.slickPause();
                slider.current.slickGoTo(5);
              }, 2900);
              setTimeout(() => {
                slider.current.slickGoTo(5);
                setStart(3);
              }, 3000);
            }}
          >
            정지
          </button>
        ) : (
          ""
        )}
        {isStart == 2 && status ? (
          <button className="p-2 sm:p-3 w-24 sm:w-32 m-auto text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 font-[GmarketSansBold]">
            정지중
          </button>
        ) : (
          ""
        )}
        {isStart == 3 && status ? (
          <button
            className="p-2 sm:p-3 w-24 sm:w-32 m-auto text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 font-[GmarketSansBold]"
            onClick={() => {
              alert("이미 추첨하셨습니당 ㅎㅎ ");
            }}
          >
            완료
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Gacha;
