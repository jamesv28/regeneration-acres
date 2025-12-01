import React from "react";
import Slider from "react-slick";
import CattleSnow from "../../assets/cattle_snow.jpg";
import Chicken from "../../assets/chicken.jpg";
import Eggs from "../../assets/eggs.jpg";
import PigYard from "../../assets/pig_yard.jpg";
import Produce from "../../assets/produce.jpg";
import Pumpkins from "../../assets/pumpkins.jpg";
import Soap from "../../assets/soap.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="container-fluid d-none d-sm-block">
      <div className="row">
        <div className="slider-container px-0 overflow-hidden">
          <Slider {...settings}>
            <div>
              <img src={CattleSnow} alt="Cattle in the snow" />
            </div>
            <div>
              <img src={Produce} alt="produce" />
            </div>
            <div>
              <img src={Chicken} alt="chicken" />
            </div>
            <div>
              <img src={Eggs} alt="eggs" />
            </div>
            <div>
              <img src={Soap} alt="soap" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
