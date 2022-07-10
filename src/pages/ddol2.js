import React from "react";
import Card from "components/Card";

const status = [
  {
    image: "images/ddol2/ddol0.jpg",
    heart: 864,
    reply: [
      { name: "lctus_", contents: "귀엽쥬?" },
      { name: "wontae", contents: "귀엽넹" },
    ],
    time: 2,
  },
  {
    image: "images/ddol2/ddol1.jpg",
    heart: "1,568",
    reply: [
      { name: "lctus_", contents: "귀하신 정면 짤님이시다.." },
      { name: "wontae", contents: "나만 똘이 없어 ㅜ" },
    ],
    time: 4,
  },
  {
    image: "images/ddol2/ddol2.jpg",
    heart: "16,240",
    reply: [
      { name: "lctus_", contents: "댕총이가 째려봄;" },
      { name: "wontae", contents: "ㅋㅋ 흰자 보이는거봐" },
    ],
    time: 5,
  },
  {
    image: "images/ddol2/ddol3.jpg",
    heart: "1,341,240",
    reply: [
      { name: "lctus_", contents: "산책하고 모찌가된 또리" },
      { name: "wontae", contents: "melted dog" },
    ],
    time: 8,
  },
  {
    image: "images/ddol2/ddol4.gif",
    heart: "241,240",
    reply: [
      { name: "lctus_", contents: "요놈시끼" },
      { name: "wontae", contents: "귀엽넹" },
    ],
    time: 8,
  },
  {
    image: "images/ddol2/ddol5.jpg",
    heart: "441,624",
    reply: [
      { name: "lctus_", contents: "배 긁어 달라고 드러누움" },
      { name: "wontae", contents: "졸귀탱ㅋㅋ" },
    ],
    time: 11,
  },
  {
    image: "images/ddol2/ddol6.jpg",
    heart: "3,441,624",
    reply: [
      { name: "lctus_", contents: "귀하신 정면 짤 후후.." },
      { name: "wontae", contents: "털 보송보송할듯" },
    ],
    time: 13,
  },
  {
    image: "images/ddol2/ddol7.jpg",
    heart: "111,624",
    reply: [
      { name: "lctus_", contents: "똘이 털 정리하고 옷 입힘 ㅎㅎ 귀엽쥬" },
      { name: "wontae", contents: "오오!!!!" },
    ],
    time: 16,
  },
  {
    image: "images/ddol2/ddol8.jpg",
    heart: "111,624",
    reply: [
      { name: "lctus_", contents: "아유 힘드렀어?" },
      { name: "wontae", contents: "혓바닥 짱 긺ㅋㅋㅋ" },
    ],
    time: 18,
  },
];

const Ddol2 = () => {
  const cards = status.map((data) => {
    return (
      <article className="py-3 sm:py-6">
        <Card
          writer="lctus_"
          spot="우리 집"
          profile={"images/profile.jpg"}
          image={data.image}
          heart={data.heart}
          reply={data.reply}
          time={data.time}
        />
      </article>
    );
  });
  return (
    <div className="bg-zinc-100">
      <div className="max-w-3xl m-auto w-full min-h-screen">
        <section className="py-12">{cards}</section>
      </div>
    </div>
  );
};

export default Ddol2;
