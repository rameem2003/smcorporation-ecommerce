import React from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";

const About = () => {
  return (
    <main className="h-screen w-full bg-bgScreen pt-[100px]">
      <Container>
        <h2 className=" font-sans font-semibold text-base sm:text-xl xl:text-3xl text-white capitalize">
          This starter template contains
        </h2>

        <Flex className=" mt-5 xl:mt-[100px] items-center gap-7 flex-wrap justify-center">
          <div className=" flex items-center justify-center gap-5 flex-col  p-5 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] xl:w-[200px] xl:h-[200px] rounded-lg bg-white/30">
            <Image
              className="w-[70%] mx-auto"
              src="https://vitejs.dev/logo.svg"
            />

            <h2 className=" font-sans font-bold text-xs sm:text-lg xl:text-2xl text-center text-white">
              Vite
            </h2>
          </div>
          <div className=" flex items-center justify-center gap-5 flex-col  p-5 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] xl:w-[200px] xl:h-[200px] rounded-lg bg-white/30">
            <Image
              className="w-[70%] mx-auto"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            />

            <h2 className=" font-sans font-bold text-xs sm:text-lg xl:text-2xl text-center text-white">
              React JS
            </h2>
          </div>

          <div className=" flex items-center justify-center gap-5 flex-col  p-5 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] xl:w-[200px] xl:h-[200px] rounded-lg bg-white/30">
            <Image
              className="w-[90%] mx-auto"
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
            />

            <h2 className=" font-sans font-bold text-xs sm:text-lg xl:text-2xll text-center text-white">
              Tailwind CSS
            </h2>
          </div>

          <div className=" flex items-center justify-center gap-5 flex-col  p-5 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] xl:w-[200px] xl:h-[200px] rounded-lg bg-white/30">
            <Image
              className="w-[60%] mx-auto"
              src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg"
            />

            <h2 className=" font-sans font-bold text-xs sm:text-lg xl:text-2xl text-center text-white">
              React Icons
            </h2>
          </div>

          <div className=" flex items-center justify-center gap-5 flex-col  p-5 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] xl:w-[200px] xl:h-[200px] rounded-lg bg-white/30">
            <Image
              className="w-[60%] mx-auto"
              src="https://reactrouter.com/_brand/react-router-mark-color-inverted.png"
            />

            <h2 className=" font-sans font-bold text-xs sm:text-lg xl:text-2xl text-center text-white">
              React Router DOM
            </h2>
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default About;
