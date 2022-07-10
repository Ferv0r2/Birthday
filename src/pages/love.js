import React from "react";
import Card from "components/Card";

const status = [
  {
    writer: "lctus_",
    profile: "images/profile.jpg",
    spot: "빛의 시어터",
    image: "images/love/light.jpg",
    heart: 425,
    reply: [
      {
        name: "lctus_",
        contents: "여기 조명 맛집임",
      },
      { name: "ferv0r2", contents: "존예;;" },
    ],
    time: 1,
  },
  {
    writer: "ferv0r2",
    profile: "images/wontae.jpg",
    spot: "잠실 어느 숙소",
    image: "images/love/chris3.jpg",
    heart: 713,
    reply: [
      {
        name: "ferv0r2",
        contents: "21년도 크리스마스 다 같이 보내니 더 재밌네 ㅋㅋ",
      },
      { name: "lctus_", contents: "인스타 글 쓰지도 않는 자시깅 모냐" },
      { name: "park.ear.0", contents: "오케이~ 다음은 더 잔뜩 ㄱ" },
      { name: "ddoiming", contents: "다음에 또 보장 ㅎㅎ" },
    ],
    time: 2,
  },
  {
    writer: "ferv0r2",
    profile: "images/wontae.jpg",
    spot: "경기광주 어느 숙소",
    image: "images/love/chris2.jpg",
    heart: "1,713",
    reply: [
      {
        name: "ferv0r2",
        contents: "20년도 크리스마스, 벽에 테이프 오지게 안 붙음 ㅜ",
      },
      { name: "lctus_", contents: "다 떨어지는거 개웃겨 ㅋㅋ" },
    ],
    time: 2,
  },
  {
    writer: "ferv0r2",
    profile: "images/wontae.jpg",
    spot: "청계천 근처 투썸플레이스",
    image: "images/love/chris1.jpg",
    heart: "3,170",
    reply: [
      {
        name: "ferv0r2",
        contents: "19년도 크리스마스.. 다시는 기념일에 청계천 금지",
      },
      { name: "lctus_", contents: "이 때 진짜.. 사람 너무 많았어" },
    ],
    time: 2,
  },
  {
    writer: "lctus_",
    profile: "images/profile.jpg",
    spot: "수양개빛터널",
    image: "images/love/tunel.jpg",
    heart: "17,308",
    reply: [
      { name: "lctus_", contents: "나 엄청 신났다 ㅋㅋ" },
      { name: "ferv0r2", contents: "재밌었어 여기 ㅋㅋㅋ" },
    ],
    time: 3,
  },
  {
    writer: "lctus_",
    profile: "images/profile.jpg",
    spot: "간호관 앞",
    image: "images/love/gradu.jpg",
    heart: "37,130",
    reply: [
      { name: "lctus_", contents: "졸업이라니.. 내가 진짜 졸업이라니!" },
      { name: "ferv0r2", contents: "완전 축하햅ㅋㅋ" },
    ],
    time: 5,
  },
  {
    writer: "ferv0r2",
    profile: "images/wontae.jpg",
    spot: "롯데월드 회전목마",
    image: "images/love/lotte.jpg",
    heart: "1,341,240",
    reply: [
      { name: "ferv0r2", contents: "살면서 이제야 회전목마 앞에서 찍었다" },
      { name: "lctus_", contents: "쪽팔려 죽는줄 ㅋㅋ" },
      { name: "park.ear.0", contents: "사진 누가 찍음? 개고수네" },
      { name: "lctus_", contents: "응 아니야~" },
    ],
    time: 8,
  },
  {
    writer: "lctus_",
    profile: "images/profile.jpg",
    spot: "단양 어느 거리",
    image: "images/love/ride.jpg",
    heart: "241,240",
    reply: [
      { name: "lctus_", contents: "나 이거 좀 잘 타는듯 ㅎ" },
      { name: "ferv0r2", contents: "쫌 치네 ㅋㅋ" },
    ],
    time: 9,
  },
  {
    writer: "lctus_",
    profile: "images/profile.jpg",
    spot: "아이스링크장",
    image: "images/love/ice.jpg",
    heart: "441,624",
    reply: [
      { name: "lctus_", contents: "사람 별로 없어서 개이득 ㅋㅋ" },
      { name: "ferv0r2", contents: "ㄹㅇ 다리 터지게 돌은듯" },
    ],
    time: 11,
  },
  {
    writer: "ferv0r2",
    profile: "images/wontae.jpg",
    spot: "아쿠아리움",
    image: "images/love/short.jpg",
    heart: "1,441,624",
    reply: [
      { name: "ferv0r2", contents: "자꾸 물 떨어짐 ㅋㅋ" },
      { name: "lctus_", contents: "아 사진 흔들린거 모냐" },
    ],
    time: 13,
  },
  {
    writer: "ferv0r2",
    profile: "images/wontae.jpg",
    spot: "제주도 카멜리아힐",
    image: "images/love/camel.jpg",
    heart: "1,713,713",
    reply: [
      { name: "ferv0r2", contents: "참꽃 군락지 ㅎㅇ" },
      { name: "lctus_", contents: "ㅋㅋ ㅋㅋㅋ" },
    ],
    time: 14,
  },
  {
    writer: "lctus_",
    profile: "images/profile.jpg",
    spot: "북촌한옥마을",
    image: "images/love/korean.jpg",
    heart: "2,141,624",
    reply: [
      { name: "lctus_", contents: "나 한복 좀 잘 어울리는 것 같아" },
      { name: "ferv0r2", contents: "ㅇㅈ 아주 귀여워" },
    ],
    time: 16,
  },
  {
    writer: "ferv0r2",
    profile: "images/wontae.jpg",
    spot: "제주도",
    image: "images/love/jeju.jpg",
    heart: "2,341,713",
    reply: [
      { name: "ferv0r2", contents: "잘 먹었다잉 ㅋㅋ" },
      { name: "lctus_", contents: "얘는 왜 자꾸 나옴? ㅋㅋ" },
      { name: "park.ear.0", contents: "나잖아." },
    ],
    time: 18,
  },
  {
    writer: "lctus_",
    profile: "images/profile.jpg",
    spot: "버스",
    image: "images/love/holiday.jpeg",
    heart: "2,341,713",
    reply: [
      { name: "lctus_", contents: "곰신군화 시절 첫 휴가 갬덩.." },
      { name: "ferv0r2", contents: "베레모 각 극혐이넹 ㅋㅋ" },
    ],
    time: 21,
  },
];

const Love = () => {
  const cards = status.map((data) => {
    return (
      <article className="py-3 sm:py-6">
        <Card
          writer={data.writer}
          profile={data.profile}
          spot={data.spot}
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

export default Love;
