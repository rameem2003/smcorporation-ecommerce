import React, { useState } from "react";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
  // states for get the user signup info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);

  // function for signup user
  const handleSignup = (e) => {
    e.preventDefault();

    console.log({ name, phone, password });
  };
  return (
    <section className="my-10">
      <Container>
        <BreadCrums location="Signup" />

        <form
          onSubmit={handleSignup}
          action=""
          className=" w-full md:w-[450px] mx-auto p-2 border-[1px] border-[#F0F0F0]"
        >
          <h2 className="font-semibold text-2xl text-center mb-5">
            New Account
          </h2>

          <div className=" mb-5 w-full">
            <label className=" font-medium text-base text-black" htmlFor="">
              Your Full Name
            </label>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full h-full border-[1px] border-black p-2  font-kanit font-medium text-base xl:text-xl"
              type="text"
              required
            />
          </div>
          <div className=" mb-5 w-full">
            <label className=" font-medium text-base text-black" htmlFor="">
              Your Mobile Number
            </label>

            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="w-full h-full border-[1px] border-black p-2  font-kanit font-medium text-base xl:text-xl"
              type="text"
              placeholder="01*********"
              required
            />
          </div>

          <div className=" mb-5 w-full">
            <label className=" font-medium text-base text-black" htmlFor="">
              Create New Password
            </label>
            <div className=" relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full h-full border-[1px] border-black p-2 font-kanit font-medium text-base xl:text-xl"
                type={passwordToggle ? "text" : "password"}
                required
              />

              {passwordToggle ? (
                <IoEyeOff
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className=" absolute cursor-pointer top-[50%] translate-y-[-50%] right-2 lg:text-2xl text-black"
                />
              ) : (
                <IoEye
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className=" absolute cursor-pointer top-[50%] translate-y-[-50%] right-2 lg:text-2xl text-black"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-slate-800 font-medium text-xl text-white"
          >
            Signup
          </button>

          <p className=" mt-2 text-base font-normal text-center">
            <Link to="/login" className="text-red-500">
              Go to Login
            </Link>
          </p>
        </form>
      </Container>
    </section>
  );
};

export default Signup;
