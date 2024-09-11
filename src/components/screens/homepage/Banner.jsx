import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import banner from "../../../assets/banner.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../common/Image";
import axios from "axios";

const Banner = () => {
  const [slide, setSlide] = useState(0);
  const [bannerData, setBannerData] = useState({});
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

  const fetchData = async () => {
    const res = await axios.get("https://smcorpapi.vercel.app/api/banner");
    console.log(res.data[0]);
    setBannerData(res.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <Slider {...settings}>
        {bannerData?.banners?.map((data, i) => (
          <Image className="w-full" src={data.url} alt="banner" />
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
