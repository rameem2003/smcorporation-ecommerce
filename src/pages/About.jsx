import React, { useEffect, useState } from "react";
import Container from "./../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "./../components/common/Flex";
import Image from "./../components/common/Image";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineRssFeed } from "react-icons/md";
import axios from "axios";

const About = () => {
  const [allBanners, setAllBanners] = useState([]);
  const [bannerData, setBannerData] = useState({});

  // function for fetch the banner
  const fetchData = async () => {
    const res = await axios.get("https://smcorpapi.vercel.app/api/banner");
    setAllBanners(res.data);
    setBannerData(res.data[res.data.length - 1]);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    fetchData();
  }, []);

  return (
    <main className="w-full bg-bgScreen pt-[100px]">
      <Container>
        <BreadCrums location="About" />

        <section className=" mb-[100px]">
          <Flex className="items-center gap-5 flex-col lg:flex-row">
            <div className="w-full lg::w-1/2">
              <h1 className=" font-bold text-2xl xl:text-4xl text-red-500">
                SPL - SM Corporation (At a glance)
              </h1>

              <p className=" font-semibold text-lg text-justify mt-5">
                SPL SM Corporation is a prominent manufacturer of high-quality
                sanitary fittings, renowned for its precision engineering and
                commitment to innovation in bathroom and kitchen solutions.
                Established over two decades ago, SPL Sm Corporation has
                consistently delivered durable, aesthetically pleasing, and
                environmentally friendly fittings, including faucets,
                showerheads, valves, and other essential bathroom and kitchen
                accessories. With a focus on modern design and advanced
                water-saving technology, the company serves both residential and
                commercial markets, enhancing user experiences while promoting
                sustainability. SPL Sm Corporation prides itself on rigorous
                quality standards, ensuring that every product meets stringent
                industry specifications for performance and durability
              </p>
            </div>
            <div className="w-full lg::w-1/2">
              {bannerData.banners && (
                <div className=" mt-5">
                  <Image className="w-full" src={bannerData.banners[0].url} />
                </div>
              )}
            </div>
          </Flex>

          <Flex className="items-center gap-5 mt-5 flex-wrap justify-between">
            <div className=" w-full md:w-[48%] xl:w-[32%] p-3 bg-red-600 rounded-md">
              <Flex className="items-center gap-5">
                <div>
                  <FaLocationDot className=" text-4xl text-white" />
                </div>

                <div>
                  <h2 className=" font-medium text-lg text-white">
                    DCC-86, Road No.-1, Rahmatbagh, Ashrafabad,
                    Kamrangirchar,Dhaka-1210
                  </h2>
                </div>
              </Flex>
            </div>
            <div className=" w-full md:w-[48%] xl:w-[32%] p-3 bg-red-600 rounded-md">
              <Flex className="items-center gap-5">
                <div>
                  <FaPhoneVolume className=" text-4xl text-white" />
                </div>

                <div>
                  <h2 className=" font-medium text-lg text-white">
                    01748-121515, 01921-676695, <br /> 01933-788415
                  </h2>
                </div>
              </Flex>
            </div>
            <div className=" w-full md:w-[48%] xl:w-[32%] p-3 bg-red-600 rounded-md">
              <Flex className="items-center gap-5">
                <div>
                  <MdOutlineRssFeed className=" text-4xl text-white" />
                </div>

                <div>
                  <h2 className=" font-medium text-lg text-white">
                    Follow us at:
                  </h2>

                  <a
                    className=" font-medium text-lg text-white"
                    href="https://www.facebook.com/groups/954625342098929"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </div>
              </Flex>
            </div>
          </Flex>
        </section>
      </Container>
    </main>
  );
};

export default About;
