import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "../components/common/Flex";
import SuccessfullScreen from "../components/screens/CheckoutPage/SuccessfullScreen";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartClear } from "../redux/features/CartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate(); // navigation instance
  const customerData = useSelector((state) => state.user.user); // get customer data from rudux
  const cart = useSelector((state) => state.cartArray.cart); // get cart info from the redux
  const dispatch = useDispatch(); // disapatch instance

  // all state for handle checkout shipping data
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [district, setDistrict] = useState("");
  const [postcode, setPostcode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [total, setTotal] = useState(0); // for calculate & store the price

  // calculate the grand total
  const calculateTotal = () => {
    let p = 0;
    cart.map((data) => (p = p + Math.round(data.price * data.qun)));
    setTotal(p);
  };

  useEffect(() => {
    calculateTotal();
  });

  // check if the customer are logged in
  useEffect(() => {
    if (customerData.status == false) {
      navigate("/login");
    }
  }, []);

  // function for checkout
  const handleCheckout = async (e) => {
    e.preventDefault();

    let orderInvoiceData = {
      orderID: uuidv4(),
      customerName: customerData.user,
      customerType: customerData.type,
      phone: customerData.phone,
      address,
      area,
      district,
      postcode,
      orderTimeStamp: new Date().toLocaleString(),
      orderTimeString: Date.now(),
      cart,
      grandTotal: total,
      orderStatus: "pending",
      shippingAgent: "Not Assigned",
    };

    if (address && area && district && postcode) {
      try {
        const res = await axios.post(
          "https://smcorpapi.vercel.app/api/order",
          orderInvoiceData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setIsSuccess(true);

        dispatch(cartClear());
      } catch (error) {
        console.log(error);
        setIsSuccess(false);
      }
    }

    // console.log(orderInvoiceData);
  };

  return (
    <section className="my-10 relative">
      <Container>
        <BreadCrums location="Checkout" />

        {cart.length == 0 && (
          <p className="p-3 bg-red-700 font-semibold text-xl text-center text-white">
            You have no item to cart. pls get your products
          </p>
        )}

        <div className="md:mt-[100px] ">
          {isSuccess && <SuccessfullScreen />}
          <Flex className="gap-5 flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2">
              <h4 className="font-bold text-lg lg:text-[40px] text-black mb-[42px]">
                Your Shipping Address
              </h4>

              <form action="" onSubmit={handleCheckout}>
                <div className=" mb-5 w-full">
                  <label
                    className=" font-medium text-base text-black"
                    htmlFor=""
                  >
                    Your Address
                  </label>

                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="w-full h-full border-[1px] border-black p-2  font-kanit font-medium text-base xl:text-xl"
                    type="text"
                    required
                  />
                </div>
                <div className=" mb-5 w-full">
                  <label
                    className=" font-medium text-base text-black"
                    htmlFor=""
                  >
                    Your Area
                  </label>

                  <input
                    onChange={(e) => setArea(e.target.value)}
                    value={area}
                    className="w-full h-full border-[1px] border-black p-2  font-kanit font-medium text-base xl:text-xl"
                    type="text"
                    required
                  />
                </div>
                <div className=" mb-5 w-full">
                  <label
                    className=" font-medium text-base text-black"
                    htmlFor=""
                  >
                    Your District
                  </label>

                  <input
                    onChange={(e) => setDistrict(e.target.value)}
                    value={district}
                    className="w-full h-full border-[1px] border-black p-2  font-kanit font-medium text-base xl:text-xl"
                    type="text"
                    required
                  />
                </div>
                <div className=" mb-5 w-full">
                  <label
                    className=" font-medium text-base text-black"
                    htmlFor=""
                  >
                    Post Code
                  </label>

                  <input
                    onChange={(e) => setPostcode(e.target.value)}
                    value={postcode}
                    className="w-full h-full border-[1px] border-black p-2  font-kanit font-medium text-base xl:text-xl"
                    type="text"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full p-3 bg-slate-800 font-medium text-xl text-white ${
                    cart.length == 0 &&
                    "pointer-events-none cursor-not-allowed bg-slate-400"
                  }`}
                >
                  Procced to Checkout
                </button>
              </form>
            </div>

            <div className="w-full md:w-1/2">
              <h4 className="font-bold text-lg lg:text-[40px] text-black mb-[42px]">
                Your Order
              </h4>

              <div className="w-full xl:w-[644px]">
                <Flex>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                    Product
                  </p>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                    Total
                  </p>
                </Flex>

                {cart.length > 0 ? (
                  cart.map((cItem, i) => (
                    <Flex key={i}>
                      <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                        {cItem.title} (x{cItem.qun})
                      </p>
                      <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                        ৳ {cItem.price * cItem.qun} BDT
                      </p>
                    </Flex>
                  ))
                ) : (
                  <Flex>
                    <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                      Product name x 1
                    </p>
                    <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                      389.99 $
                    </p>
                  </Flex>
                )}

                <Flex className="bg-red-700">
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-white">
                    Subtotal
                  </p>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-white">
                    ৳ {total} BDT
                  </p>
                </Flex>
                <Flex className="bg-red-700">
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-white">
                    Total
                  </p>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-white">
                    ৳ {total} BDT
                  </p>
                </Flex>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
