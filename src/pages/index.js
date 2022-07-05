import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "components/Modal";
import Loading from "components/Loading";
import BannerSlider from "components/BannerSlider";

import { useRecoilState } from "recoil";
import { modalState } from "components/states";

const Home = () => {
  const router = useRouter();
  const [modal, setModal] = useRecoilState(modalState);
  const [isLoading, setLoading] = useState(true);

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
      setTimeout(() => setModal(false), 500);
      const modalObj = { md: false };
      window.localStorage.setItem("mdStatus", JSON.stringify(modalObj));
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="bg-main w-full">
      <Modal open={modal} close={closeModal} />
      <div className="max-w-3xl m-auto w-full min-h-screen overflow-hidden">
        <div className="py-6 sm:py-0">
          <BannerSlider />
          <div onClick={(e) => router.push("/letter")}>Letter</div>
          <div>Ddol2's Gallery</div>
          <div>Love Gallery</div>
          <div>Open Box</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
