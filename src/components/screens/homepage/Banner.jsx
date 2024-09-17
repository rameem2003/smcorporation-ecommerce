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
import { Link } from "react-router-dom";

const Banner = () => {
  const [slide, setSlide] = useState(0);
  const [allBanners, setAllBanners] = useState([]);
  const [bannerData, setBannerData] = useState({});
  const [news, setNews] = useState([]); // state for store the news
  const array = news.sort((a, b) => b.timeStamp - a.timeStamp);

  // slider settings
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

  // function for fetch the news
  const fetchNews = async () => {
    const res = await axios.get("https://smcorpapi.vercel.app/api/news");
    setNews(res.data);
  };

  // function for fetch the banner
  const fetchData = async () => {
    const res = await axios.get("https://smcorpapi.vercel.app/api/banner");
    setAllBanners(res.data);
    setBannerData(res.data[res.data.length - 1]);
  };

  useEffect(() => {
    fetchData();
    fetchNews();
  }, []);

  return (
    <section className="shadow-custom">
      <Flex className="items-center justify-between gap-1">
        <div className="hidden md:block md:w-[25%]  lg:w-[17.5%] text-center h-[330px] xl:h-[600px] group overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              className="w-full h-full duration-700 ease-in-out group-hover:scale-[1.2]"
              src={array[0]?.thumbnail}
              alt="caption"
            />
            <div className=" absolute h-full w-full top-0 left-0 bg-lenear z-50 p-3 flex justify-end flex-col ">
              <h2 className=" font-bold text-3xl text-white">
                {array[0]?.title}
              </h2>
              <p className=" font-medium text-lg text-white/90">
                {array[0]?.details}
              </p>
              <div>
                <Link
                  to="/news"
                  className=" mt-5 font-semibold text-lg text-black py-1 px-4 rounded-full bg-white inline-block"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]  lg:w-[65%]">
          {allBanners.length == 0 && (
            <div className="w-full">
              <Skeleton height={350} />
            </div>
          )}
          <Slider {...settings}>
            {bannerData?.banners?.map((data, i) => (
              <Image
                className="w-full sm:h-auto lg:h-[330px] xl:h-[600px]  "
                src={data.url}
                alt="banner"
                key={i}
              />
            ))}
          </Slider>
        </div>
        <div className="hidden md:block md:w-[25%]  lg:w-[17.5%] text-center h-[330px] xl:h-[600px] group overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              className="w-full h-full duration-700 ease-in-out group-hover:scale-[1.2]"
              src={array[1]?.thumbnail}
              alt="caption"
            />
            <div className=" absolute h-full w-full top-0 left-0 bg-lenear z-50 p-3 flex justify-end flex-col ">
              <h2 className=" font-bold text-3xl text-white">
                {array[1]?.title}
              </h2>
              <p className=" font-medium text-lg text-white/90">
                {array[1]?.details}
              </p>
              <div>
                <Link
                  to="/news"
                  className=" mt-5 font-semibold text-lg text-black py-1 px-4 rounded-full bg-white inline-block"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Flex>
    </section>
  );
};

export default Banner;
