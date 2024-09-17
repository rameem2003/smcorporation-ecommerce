import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Flex from "./../../common/Flex";
import Image from "../../common/Image";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../common/Container";

const Banner = () => {
  const [slide, setSlide] = useState(0);
  const [allBanners, setAllBanners] = useState([]);
  const [bannerData, setBannerData] = useState({});
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
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
    // console.log(res.data[res.data.length - 1]);
    setAllBanners(res.data);
    setBannerData(res.data[res.data.length - 1]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(allBanners);

  return (
    <section className="shadow-custom">
      <Flex className="items-center justify-between">
        <div className="hidden md:block  md:w-[17.5%] text-center">
          <p>content coming soon</p>
        </div>
        <div className="w-full  md:w-[65%]">
          {allBanners.length == 0 && (
            <div className="w-full">
              <Skeleton height={350} />
            </div>
          )}
          <Slider {...settings}>
            {bannerData?.banners?.map((data, i) => (
              <Image
                className="w-full sm:h-auto xl:h-[600px]  "
                src={data.url}
                alt="banner"
                key={i}
              />
            ))}
          </Slider>
        </div>
        <div className="hidden md:block  md:w-[17.5%] text-center">
          <p>content coming soon</p>
        </div>
      </Flex>
    </section>
  );
};

export default Banner;
