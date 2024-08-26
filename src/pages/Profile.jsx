import React from "react";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";
import { useSelector } from "react-redux";

const Profile = () => {
  const customerdata = useSelector((state) => state.user.user); // get customer info from the redux
  return (
    <section className="my-10">
      <Container>
        <BreadCrums location="Profile" />

        <Flex className="mt-5 flex-col md:flex-row gap-10">
          <div className=" w-full md:w-1/2 lg:w-3/12">
            <h2 className=" font-bold text-xl lg:text-5xl text-black">
              Profile Info
            </h2>

            <Image
              src="/avater.png"
              className=" sm:w-[50%] lg:w-full mx-auto"
            />

            <div className="mt-2">
              <h3 className=" font-bold text-3xl text-black text-center">
                {customerdata.user}
              </h3>
              <h3 className=" font-semibold text-xl text-black text-center">
                Phone: {customerdata.phone}
              </h3>
            </div>
          </div>
          <div className=" w-full md:w-1/2 lg:w-9/12">
            <h2 className=" font-bold text-xl lg:text-5xl text-black text-left lg:text-right">
              Your Order's
            </h2>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Profile;
