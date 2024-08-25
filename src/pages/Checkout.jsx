import React, { useState } from "react";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "../components/common/Flex";
import SuccessfullScreen from "../components/screens/CheckoutPage/SuccessfullScreen";
import { useSelector } from "react-redux";

const Checkout = () => {
  const customerData = useSelector((state) => state.user.user); // get customer data from rudux
  console.log(customerData);

  // all state for handle checkout shipping data
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [district, setDistrict] = useState("");
  const [postcode, setPostcode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // function for checkout
  const handleCheckout = (e) => {
    e.preventDefault();

    console.log({ address, area, district, postcode });
    setIsSuccess(true);
  };

  return (
    <section className="my-10 relative">
      <Container>
        <BreadCrums location="Checkout" />

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
                  className="w-full p-3 bg-slate-800 font-medium text-xl text-white"
                >
                  Procced to Checkout
                </button>
              </form>
            </div>

            <div className="w-full md:w-1/2">
              <h4 className="font-bold text-lg lg:text-[40px] text-black mb-[42px]">
                Your Order
              </h4>

              <div className="w-full lg:w-[644px]">
                <Flex>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                    Product
                  </p>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                    Total
                  </p>
                </Flex>

                {/* {cartProducts.length > 0 ? (
                cartProducts.map((cItem, i) => (
                  <Flex key={i}>
                    <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                      {cItem.title} (x{cItem.qun})
                    </p>
                    <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                      {Math.round(
                        (cItem.price -
                          (cItem.price * cItem.discountPercentage) / 100) *
                          cItem.qun
                      )}
                      $
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
              )} */}

                <Flex>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                    Subtotal
                  </p>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                    price $
                  </p>
                </Flex>
                <Flex>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                    Total
                  </p>
                  <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                    price $
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
