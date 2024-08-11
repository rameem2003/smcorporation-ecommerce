import React from "react";
import item from "../../assets/item.png";
import Image from "./Image";
import { Link } from "react-router-dom";
import Flex from "./Flex";
import { FaCartShopping, FaRegEye } from "react-icons/fa6";

const ItemCardProtrait = ({ className }) => {
  return (
    <div className={`${className} border-[1px] border-gray-500 p-2`}>
      <div className="w-full">
        <Image className="mx-auto" src={item} alt="item" />
      </div>

      <div>
        <Link className=" font-semibold text-lg text-black text-center block">
          Product Name
        </Link>

        <p className=" font-bold text-xl text-center text-red-500">
          ৳ 1200 BDT
        </p>

        <Flex className="items-center gap-1 mt-2">
          <button className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white">
            <FaRegEye /> View
          </button>
          <button className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white">
            <FaCartShopping /> Cart
          </button>
        </Flex>
      </div>
    </div>
  );
};

export default ItemCardProtrait;
