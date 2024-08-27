import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import ItemCardProtrait from "../../common/ItemCardProtrait";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductsSection = () => {
  // get all products from the redux
  const products = useSelector((state) => state.allProducts.products);
  return (
    <section className="my-10">
      <Container>
        <h2 className=" font-bold text-4xl text-black">Our Collections</h2>

        {products.length == 0 && (
          <Flex className="gap-5 flex-wrap lg:flex-nowrap">
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
          </Flex>
        )}

        <Flex className="mt-5 flex-wrap gap-[12px] items-center justify-between">
          {products.slice(0, 12).map((data, i) => (
            <ItemCardProtrait
              data={data}
              key={i}
              className=" w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]"
            />
          ))}
        </Flex>

        <div className=" text-center">
          <Link
            to="/shop"
            className=" my-10 mx-auto inline-flex items-center justify-center gap-2 p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white"
          >
            View More
            <FaArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;
