import React, { useState } from "react";
import Slider from "react-slick";
import banner from "../../../assets/banner.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../common/Image";

const Banner = () => {
  const [slide, setSlide] = useState(0);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          transform: "translateY(-50px)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === slide
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                backgroundColor: "black",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                backgroundColor: "gray",
              }
        }
      >
        {/* {i + 1} */}
      </div>
    ),

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section>
      <Slider {...settings}>
        <Image src={banner} alt="banner" />
        <Image src={banner} alt="banner" />
        <Image src={banner} alt="banner" />
        <Image src={banner} alt="banner" />
        <Image src={banner} alt="banner" />
      </Slider>
    </section>
  );
};

export default Banner;
