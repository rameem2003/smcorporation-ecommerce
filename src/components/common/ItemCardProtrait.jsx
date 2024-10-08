import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaCartShopping, FaRegEye, FaShare } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { cartReducer } from "../../redux/features/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const ItemCardProtrait = ({ className, data }) => {
  const dispatch = useDispatch(); // dispatch instance

  // function for add the product to the cart
  const addToCart = () => {
    dispatch(cartReducer({ ...data, qun: 1 }));
    toast.success("Item is added");
  };

  // function for copy the product link
  const handleShare = () => {
    let link = `https://www.mssmcorporation.com/product/${data.id}`;
    navigator.clipboard
      .writeText(link)
      .then(() => toast.success("Item is added"));
  };
  return (
    <div
      className={`${className} border-[1px] border-gray-500 p-2 relative overflow-hidden`}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Flex className="flex-col absolute duration-200 ease-in-out top-2 group right-[-58px] hover:right-0 bg-white shadow-lg">
        <button
          onClick={handleShare}
          className=" p-3 text-balance flex items-center duration-200 ease-in-out gap-5 group-hover:gap-2 font-semibold"
        >
          <FaShare /> Share
        </button>
      </Flex>
      <div className="w-full h-[250px]">
        <Image
          className="mx-auto h-full object-cover w-full"
          src={data.thumbnail}
          alt="item"
        />
      </div>

      <div>
        <Link
          to={`/product/${data.id}`}
          className=" font-semibold text-lg text-black text-center block"
        >
          {data.title.slice(0, 20)}
        </Link>

        <p className=" font-bold text-lg text-center text-red-500">
          Size: {data.dimensions}
        </p>
        <p className=" font-bold text-xl text-center text-red-500">
          {data.price > 0 ? `৳ ${data.price} BDT` : "Price to be announced"}
        </p>

        <Flex className="items-center gap-1 mt-2">
          <Link
            to={`/product/${data.id}`}
            className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white"
          >
            <FaRegEye /> View
          </Link>

          {data.price > 0 ? (
            <button
              onClick={addToCart}
              className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white"
            >
              <FaCartShopping /> Cart
            </button>
          ) : (
            <button className=" pointer-events-none flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white text-gray-400">
              <FaCartShopping /> Cart
            </button>
          )}

          {/* <button
            onClick={addToCart}
            className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white"
          >
            <FaCartShopping /> Cart
          </button> */}
        </Flex>
      </div>
    </div>
  );
};

export default ItemCardProtrait;
