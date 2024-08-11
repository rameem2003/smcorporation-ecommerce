import React, { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import item from "../../assets/item.png";
import { Link } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import { FaAngleDown, FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import Image from "../common/Image";

const Header = () => {
  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const categoryRef = useRef();
  const accountRef = useRef();
  const cartRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      categoryRef.current.contains(e.target)
        ? setToggleCategory(true)
        : setToggleCategory(false);
      accountRef.current.contains(e.target)
        ? setToggleAccount(true)
        : setToggleAccount(false);
      cartRef.current.contains(e.target)
        ? setToggleCart(true)
        : setToggleCart(false);
    });
  }, []);
  return (
    <header className="bg-red-600 py-2">
      <Container>
        <Flex className="items-center gap-2 xl:gap-5 justify-between">
          <div className="w-3/12 md:w-2/12 relative">
            <div ref={categoryRef}>
              <Flex className="items-center justify-center gap-2 cursor-pointer">
                <IoGridOutline className=" text-[24px] text-white" />

                <span className=" hidden lg:block font-bold text-sm xl:text-xl text-white">
                  View Categories
                </span>

                <FaAngleDown className="hidden lg:block text-[24px] text-white" />
              </Flex>
            </div>
            {toggleCategory && (
              <List className=" w-[300px] md:w-[300px] bg-red-600 absolute top-[48px] left-0 md:left-[18px] z-50">
                <ListItem className=" font-bold text-xl text-white px-2 py-4 block duration-300 ease-in-out hover:pl-5 hover:bg-red-700">
                  <Link>Pipe Fitings</Link>
                </ListItem>
                <ListItem className=" font-bold text-xl text-white px-2 py-4 block duration-300 ease-in-out hover:pl-5 hover:bg-red-700">
                  <Link>Bathroom Fitings</Link>
                </ListItem>
              </List>
            )}
          </div>
          <div className="w-6/12 md:w-8/12">
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
          <div className="w-3/12 md:w-2/12">
            <Flex className="items-center gap-5 justify-end relative">
              <div ref={accountRef}>
                <Flex className="items-center gap-2 cursor-pointer">
                  <FaUserCircle className=" text-[24px] text-white" />

                  <span
                    className="hidden lg:block font-bold text-sm
                  xl:text-xl text-white"
                  >
                    Account
                  </span>
                </Flex>
              </div>

              {toggleAccount && (
                <Flex className="w-[300px] p-3 bg-red-600 absolute top-[48px] right-0 z-50 gap-2">
                  <button className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-white font-semibold text-lg text-white">
                    Login
                  </button>
                  <button className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-white font-semibold text-lg text-white">
                    Signup
                  </button>
                </Flex>
              )}

              <div ref={cartRef}>
                <Flex className="items-center gap-2 cursor-pointer">
                  <FaCartShopping className=" text-[24px] text-white" />

                  <span
                    className="hidden lg:block font-bold text-sm
                  xl:text-xl text-white"
                  >
                    Cart
                  </span>
                </Flex>
              </div>

              {toggleCart && (
                <div className="w-[300px] p-3 bg-slate-800 absolute top-[48px] right-0 z-50 ">
                  <div className="max-h-[220px] overflow-y-scroll">
                    <Flex className="items-center gap-5 mb-5">
                      <Image
                        src={item}
                        alt="item"
                        className="w-[80px] h-[80px]"
                      />

                      <div>
                        <h3 className=" font-medium text-lg text-white">
                          Product Name
                        </h3>

                        <p className=" font-semibold text-base text-white">
                          Qun: x3
                        </p>
                        <p className=" font-semibold text-base text-white">
                          Price: ৳ 1200 BDT
                        </p>
                      </div>
                    </Flex>
                    <Flex className="items-center gap-5 mb-5">
                      <Image
                        src={item}
                        alt="item"
                        className="w-[80px] h-[80px]"
                      />

                      <div>
                        <h3 className=" font-medium text-lg text-white">
                          Product Name
                        </h3>

                        <p className=" font-semibold text-base text-white">
                          Qun: x3
                        </p>
                        <p className=" font-semibold text-base text-white">
                          Price: ৳ 1200 BDT
                        </p>
                      </div>
                    </Flex>
                    <Flex className="items-center gap-5 mb-5">
                      <Image
                        src={item}
                        alt="item"
                        className="w-[80px] h-[80px]"
                      />

                      <div>
                        <h3 className=" font-medium text-lg text-white">
                          Product Name
                        </h3>

                        <p className=" font-semibold text-base text-white">
                          Qun: x3
                        </p>
                        <p className=" font-semibold text-base text-white">
                          Price: ৳ 1200 BDT
                        </p>
                      </div>
                    </Flex>
                  </div>

                  <button className="mt-10 flex items-center justify-center gap-2 w-full p-2 border-[1px] border-white font-semibold text-lg text-white">
                    Go to Cart
                  </button>
                </div>
              )}
            </Flex>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
