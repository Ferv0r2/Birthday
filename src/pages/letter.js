import React from "react";

const letter = () => {
  return (
    <div className="relative bg-zinc-100">
      <img
        className="absolute w-96 hidden lg:block bottom-0 left-0"
        src="images/bg_letter.png"
      />
      <img
        className="absolute w-80 hidden lg:block bottom-0 right-0"
        src="images/bg_letter2.png"
      />
      <div className="max-w-3xl m-auto w-10/12 lg:w-full min-h-0 sm:min-h-screen">
        <div className="py-16">
          <div className="relative bg-white font-[Bareunbatang] text-sm sm:text-lg rounded-xl">
            <img
              className="absolute top-2 sm:top-4 left-1/2 w-20 sm:w-32 transform -translate-x-1/2 -translate-y-1/2"
              src="images/ribbon.png"
            />
            <p className="p-6 sm:p-12">To. 지영</p>
            <p className="px-6 sm:px-12 leading-loose font-[Donoun-Medium]">
              생일 축하해 지영아 ㅎㅎ<br></br>
              내가 뭔가 만드는건 봤는데 정확히 뭘하는 직업인가 싶었지? ㅋㅋ
              <br></br>
              이번에는 온전히 지영이를 위해서 웹사이트를 준비해봤어! 이제 쪼금은
              실감이 났을 지 모르겠네
              <br></br>
              <br></br>
              최근에 탈도 많았고, 너도 나도 바쁜 삶을 살고 있는 것 뿐만 아니라
              금전적으로도 여유가 없어서 참 힘든 시기인 것 같아
              <br></br>
              그래서 고민하던 중에 내 전공을 살리면서 정말 의미있는 선물을 하는
              방법을 생각했고 이렇게 사이트를 만들어 봤어
              <br></br>
              강남세브란스 병원부터 서울성모 병원까지 전부 합격한거 축하해
              <br></br>
              서류부터 여러 면접을 거쳐 최종까지 합격했다는 사실에 나 역시 너무
              기뻤어
              <br></br>
              지영이가 노력한 만큼 그 대가를 톡톡히 받은 것 같아서 좋았고,
              지영이가 잘 되는게 내 일처럼 기분이 좋았어
              <br></br>
              나도 그런 모습에 좀 더 의지도 다잡고 집중할 수 있는 것 같아 너의
              모습이 누군가에게는 자극이 되었을 것이 확실하니까 자랑스러워 해도
              좋아 ㅋㅋ
              <br></br>
              이제 7월부터 학원에 다니면서 하루종일 영어만 보고 있는데 쉽지
              않더라
              <br></br>
              토익 학원에 등록하면서 하루하루 이 시간을 오랜 기간 이겨온
              지영이가 정말 대단해
              <br></br>
              머리로 생각한거랑 직접 경험하는 것은 역시 하늘과 땅 차이인 것 같아
              ㅋㅋ
              <br></br>
              어떻게든 900점 넘겨서 지영이랑 결혼하면 좋겠다 ^_^
              <br></br>
              <br></br>
              나랑 함께 해줘서 고마워. 지영이랑 같이 있으면 행복하고, 한 순간 한
              순간이 소중하고 감사해
              <br></br>
              오늘은 온전히 너를 위한 행복한 시간이 됐으면 좋겠어. 다시 한 번
              생일 축하해 ㅎㅅㅎ
            </p>
            <p className="p-6 sm:p-12 text-right">From. 남치니</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default letter;
