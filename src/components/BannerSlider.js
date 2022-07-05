import React from "react";
import Slider from "react-slick";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autuplaySpeed: 1000,
  };

  return (
    <div className="py-8 relative z-0">
      <Slider {...settings}>
        <div>
          <img src="images/slide1.png" alt="content" />
        </div>
        <div>
          <img src="images/slide2.png" alt="content" />
        </div>
        <div>
          <img src="images/slide3.png" alt="content" />
        </div>
        <div>
          <img src="images/slide4.png" alt="content" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
