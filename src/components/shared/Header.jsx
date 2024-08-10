import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { IoGridOutline } from "react-icons/io5";
import { FaAngleDown, FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-red-600 py-2">
      <Container>
        <Flex className="items-center gap-5 justify-between">
          <div className="w-2/12">
            <Flex className="items-center gap-2 cursor-pointer">
              <IoGridOutline className=" text-[24px] text-white" />

              <span className=" font-bold text-xl text-white">
                View Categories
              </span>

              <FaAngleDown className=" text-[24px] text-white" />
            </Flex>
          </div>
          <div className="w-8/12">
            <div className=" relative">
              <input
                className=" w-full rounded-[5px] p-3 pr-[50px] font-medium text-lg"
                type="text"
                name=""
                id=""
                placeholder="Search by keyword"
              />

              <FaSearch className=" text-[24px] text-black absolute right-3 top-[50%] translate-y-[-50%]" />
            </div>
          </div>
          <div className="w-2/12">
            <Flex className="items-center gap-5 justify-end">
              <Flex className="items-center gap-2 cursor-pointer">
                <FaUserCircle className=" text-[24px] text-white" />

                <span className=" font-bold text-xl text-white">Account</span>
              </Flex>

              <Flex className="items-center gap-2 cursor-pointer">
                <FaCartShopping className=" text-[24px] text-white" />

                <span className=" font-bold text-xl text-white">Cart</span>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
