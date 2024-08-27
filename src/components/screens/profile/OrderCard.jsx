import React from "react";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const OrderCard = ({ data }) => {
  return (
    <div className=" border-b-[2px] border-black mb-10 py-5 ">
      <Flex className="items-center justify-between mb-3">
        <div className="w-1/2">
          <p className=" font-semibold text-lg text-red-700">
            Order id: {data.orderID}
          </p>
          <p className=" font-semibold text-lg text-black">
            Order Date: {data.orderTimeStamp}
          </p>
        </div>
        <div className="w-1/2 text-right">
          {data.orderStatus == "pending" && (
            <span className=" text-right p-1 rounded-full text-yellow-500 border-[2px] border-yellow-500">
              Order is pending
            </span>
          )}
          {data.orderStatus == "completed" && (
            <span className=" text-right p-1 rounded-full text-green-500 border-[2px] border-green-500">
              Order is completed
            </span>
          )}
          {data.orderStatus == "canceled" && (
            <span className=" text-right p-1 rounded-full text-red-500 border-[2px] border-red-500">
              Order is canceled
            </span>
          )}
        </div>
      </Flex>

      <Flex className="items-center justify-between flex-wrap gap-5 mb-3">
        <p className="font-medium text-lg text-black">
          Address: {data.address}
        </p>
        <p className="font-medium text-lg text-black">Area: {data.area}</p>
        <p className="font-medium text-lg text-black">
          District: {data.district}
        </p>
        <p className="font-medium text-lg text-black">
          Post Code: {data.postcode}
        </p>
      </Flex>

      <div className="">
        {data.cart?.map((item, i) => (
          <Flex key={i}>
            <div className="w-7/12">
              <h3 className=" font-bold text-xl text-red-700 mb-1">
                {item.title}
              </h3>

              <Flex className="items-center justify-between gap-5">
                <p className=" font-semibold text-lg text-black">
                  Product id: <span className=" text-red-700">{item.id}</span>
                </p>
                <p className=" font-semibold text-lg text-black">
                  Quntity: <span className=" text-red-700">{item.qun}</span>
                </p>
                <p className=" font-semibold text-lg text-black">
                  Subtotal:{" "}
                  <span className=" text-red-700">{item.qun * item.price}</span>
                </p>
              </Flex>
            </div>
            <div className="w-5/12">
              <Image
                className="w-[200px] h-[200px] ml-auto"
                src={item.thumbnail}
              />
            </div>
          </Flex>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
