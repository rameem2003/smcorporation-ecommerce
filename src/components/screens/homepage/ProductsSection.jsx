import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import ItemCardProtrait from "../../common/ItemCardProtrait";
import { FaArrowRight } from "react-icons/fa6";

const ProductsSection = () => {
  return (
    <section className="my-10">
      <Container>
        <h2 className=" font-bold text-4xl text-black">Our Collections</h2>

        <Flex className="mt-5 flex-wrap gap-[12px] items-center justify-between">
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
          <ItemCardProtrait className="w-[16%]" />
        </Flex>

        <button className=" my-10 mx-auto flex items-center justify-center gap-2 p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white">
          View More
          <FaArrowRight />
        </button>
      </Container>
    </section>
  );
};

export default ProductsSection;
