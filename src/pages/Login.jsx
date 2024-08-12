import React, { useState } from "react";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
  // all state for get user login info
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);

  // function for login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ phone, password });
  };
  return (
    <section className=" my-10">
      <Container>
        <BreadCrums location="Login" />

        <form
          onSubmit={handleLogin}
          action=""
          className=" w-full md:w-[450px] mx-auto p-2 border-[1px] border-[#F0F0F0]"
        >
          <h2 className="font-semibold text-2xl text-center mb-5">
            Login Here
          </h2>

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
              Password
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
            Login
          </button>

          <p className=" mt-2 text-base font-normal text-center">
            No Account ?
            <Link to="/signup" className="text-red-500">
              Create a new Account
            </Link>
          </p>
        </form>
      </Container>
    </section>
  );
};

export default Login;
