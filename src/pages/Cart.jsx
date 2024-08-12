import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "../components/common/Flex";
import item from "../assets/item.png";
import Image from "../components/common/Image";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
  // navigation instance
  const navigate = useNavigate();
  return (
    <section className="my-10">
      <Container>
        <BreadCrums location="Cart" />

        <div className="mt-[100px]">
          {/* cart body for small screens */}
          <Flex className="flex-wrap gap-2 lg:hidden">
            <div className=" w-full md:w-[48%] border-[1px] border-[#F0F0F0] p-2">
              <div className="relative w-full h-auto">
                <Image className="w-full h-full" src={item} alt="item" />
                <FaTimes className=" absolute top-1 right-1 cursor-pointer" />
                <span className="p-2 bg-slate-800 font-medium text-xs text-center text-white absolute top-1 left-1">
                  Unit Price: ৳ 1200 BDT
                </span>
              </div>

              <div className="mt-5">
                <h3 className=" font-dm font-bold text-base text-center text-black">
                  Product Name
                </h3>
                <Flex
                  className={`my-5 border-[1px] border-[#F0F0F0] w-[50%] items-center justify-center mx-auto`}
                >
                  <button
                    //   onClick={() => quantity(i, -1)}
                    className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                  >
                    -
                  </button>
                  <button className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]">
                    {/* {cItem.qun} */} 3
                  </button>
                  <button
                    //   onClick={() => quantity(i, +1)}
                    className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                  >
                    +
                  </button>
                </Flex>

                <p className=" font-bold text-base text-center text-red-500">
                  Sun Total: ৳ 1200 BDT
                </p>
              </div>
            </div>
            <div className=" w-full md:w-[48%] border-[1px] border-[#F0F0F0] p-2">
              <div className="relative w-full h-auto">
                <Image className="w-full h-full" src={item} alt="item" />
                <FaTimes className=" absolute top-1 right-1 cursor-pointer" />
                <span className="p-2 bg-slate-800 font-medium text-xs text-center text-white absolute top-1 left-1">
                  Unit Price: ৳ 1200 BDT
                </span>
              </div>

              <div className="mt-5">
                <h3 className=" font-dm font-bold text-base text-center text-black">
                  Product Name
                </h3>
                <Flex
                  className={`my-5 border-[1px] border-[#F0F0F0] w-[50%] items-center justify-center mx-auto`}
                >
                  <button
                    //   onClick={() => quantity(i, -1)}
                    className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                  >
                    -
                  </button>
                  <button className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]">
                    {/* {cItem.qun} */} 3
                  </button>
                  <button
                    //   onClick={() => quantity(i, +1)}
                    className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                  >
                    +
                  </button>
                </Flex>

                <p className=" font-bold text-base text-center text-red-500">
                  Sun Total: ৳ 1200 BDT
                </p>
              </div>
            </div>
            <div className=" w-full md:w-[48%] border-[1px] border-[#F0F0F0] p-2">
              <div className="relative w-full h-auto">
                <Image className="w-full h-full" src={item} alt="item" />
                <FaTimes className=" absolute top-1 right-1 cursor-pointer" />
                <span className="p-2 bg-slate-800 font-medium text-xs text-center text-white absolute top-1 left-1">
                  Unit Price: ৳ 1200 BDT
                </span>
              </div>

              <div className="mt-5">
                <h3 className=" font-dm font-bold text-base text-center text-black">
                  Product Name
                </h3>
                <Flex
                  className={`my-5 border-[1px] border-[#F0F0F0] w-[50%] items-center justify-center mx-auto`}
                >
                  <button
                    //   onClick={() => quantity(i, -1)}
                    className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                  >
                    -
                  </button>
                  <button className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]">
                    {/* {cItem.qun} */} 3
                  </button>
                  <button
                    //   onClick={() => quantity(i, +1)}
                    className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                  >
                    +
                  </button>
                </Flex>

                <p className=" font-bold text-base text-center text-red-500">
                  Sun Total: ৳ 1200 BDT
                </p>
              </div>
            </div>
          </Flex>
          {/* cart body for small screens */}

          {/* cart header for big screen  */}
          <Flex className=" hidden lg:flex items-center bg-slate-800 py-[34px] px-5 flex-wrap">
            <div className="w-1/4">
              <h2 className="font-bold text-[16px] text-white">Product</h2>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold text-[16px] text-white">Price</h2>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold text-[16px] text-white">Quantity</h2>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold text-[16px] text-white">Sub Total</h2>
            </div>
          </Flex>
          {/* cart header for big screen  */}

          {/* cart body for big screen */}
          <Flex className="hidden lg:flex border-[1px] border-[#F0F0F0] py-[30px] px-5 flex-wrap">
            <div className="w-1/4">
              <Flex className={`items-center gap-10`}>
                <FaTimes className=" cursor-pointer" />
                <Flex className={`items-center gap-5`}>
                  <Image className={`w-[100px] h-[100px]`} src={item} />
                  <h3 className=" font-dm font-bold text-[16px] text-black">
                    Product Name
                  </h3>
                </Flex>
              </Flex>
            </div>

            <Flex className="w-1/4 items-center">
              <h3 className=" font-bold text-[20px] text-black">৳ 1200 BDT</h3>
            </Flex>

            <Flex className={`w-1/4 items-center`}>
              <Flex className={`border-[1px] border-[#F0F0F0]`}>
                <button
                  //   onClick={() => quantity(i, -1)}
                  className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                >
                  -
                </button>
                <button className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]">
                  {/* {cItem.qun} */} 3
                </button>
                <button
                  //   onClick={() => quantity(i, +1)}
                  className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                >
                  +
                </button>
              </Flex>
            </Flex>

            <Flex className="w-1/4 items-center">
              <h3 className=" font-bold text-[20px] text-black">
                ৳ 1200 BDT
                {/* {Math.round(
                      (cItem.price -
                        (cItem.price * cItem.discountPercentage) / 100) *
                        cItem.qun
                    )} */}
              </h3>
            </Flex>
          </Flex>
          <Flex className="hidden lg:flex border-[1px] border-[#F0F0F0] py-[30px] px-5 flex-wrap">
            <div className="w-1/4">
              <Flex className={`items-center gap-10`}>
                <FaTimes className=" cursor-pointer" />
                <Flex className={`items-center gap-5`}>
                  <Image className={`w-[100px] h-[100px]`} src={item} />
                  <h3 className=" font-dm font-bold text-[16px] text-black">
                    Product Name
                  </h3>
                </Flex>
              </Flex>
            </div>

            <Flex className="w-1/4 items-center">
              <h3 className=" font-bold text-[20px] text-black">৳ 1200 BDT</h3>
            </Flex>

            <Flex className={`w-1/4 items-center`}>
              <Flex className={`border-[1px] border-[#F0F0F0]`}>
                <button
                  //   onClick={() => quantity(i, -1)}
                  className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                >
                  -
                </button>
                <button className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]">
                  {/* {cItem.qun} */} 3
                </button>
                <button
                  //   onClick={() => quantity(i, +1)}
                  className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                >
                  +
                </button>
              </Flex>
            </Flex>

            <Flex className="w-1/4 items-center">
              <h3 className=" font-bold text-[20px] text-black">
                ৳ 1200 BDT
                {/* {Math.round(
                      (cItem.price -
                        (cItem.price * cItem.discountPercentage) / 100) *
                        cItem.qun
                    )} */}
              </h3>
            </Flex>
          </Flex>
          {/* cart body for big screen */}

          {/* totals start */}
          <div className="mt-[54px] mb-[140px]">
            <h4 className=" font-dm font-bold text-[20px] text-black text-right">
              Cart totals
            </h4>

            <div className="w-full text-center lg:w-[644px] lg:ml-auto mt-6">
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-bold text-base text-black">
                  Subtotal
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-normal text-base text-black ">
                  ৳ 1200 BDT
                </p>
              </Flex>
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-bold text-base text-black">
                  Total
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-normal text-base text-black ">
                  ৳ 1200 BDT
                </p>
              </Flex>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className=" w-full md:w-auto font-dm font-bold text-[14px] text-white bg-slate-800 py-4 px-8 ms-auto mt-[30px] block"
            >
              Proceed to Checkout
            </button>
          </div>
          {/* totals end */}
        </div>
      </Container>
    </section>
  );
};

export default Cart;
