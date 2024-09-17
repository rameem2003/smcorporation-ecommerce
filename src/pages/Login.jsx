import React, { useState } from "react";
import axios from "axios";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import ButtonAnimation from "../components/common/ButtonAnimation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { signInUser } from "../redux/features/AuthSlice";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigation instance
  // all state for get user login info
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  // function for login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Regular expression to check for English letters (A-Z, a-z)
    const englishRegex = /^[a-zA-Z\s]*$/;
    const numberRegex = /^[0-9]+$/;

    if (!numberRegex.test(phone)) {
      toast.error("Pls Enter Phone Number In English");
      setLoading(false);
    } else if (phone.length != 11) {
      toast.error("Pls Enter 11 Digit Valid Phone Number");
      setLoading(false);
    } else if (phone && password) {
      let customer = {
        phone,
        password,
      };
      try {
        let res = await axios.post(
          "https://smcorpapi.vercel.app/api/auth/varify",
          customer,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(res);

        if (res.data.msg == "User Found") {
          toast.success("Signin successful");

          dispatch(signInUser(res.data));

          navigate("/");
        } else {
          setLoading(false);
          toast.error("Invalid User");
        }
      } catch (error) {
        setLoading(false);
        toast.error("Something went wrong");
      }
    }
  };
  return (
    <section className=" my-10">
      <Container>
        <Toaster position="top-right" reverseOrder={false} />
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
          {loading ? (
            <ButtonAnimation />
          ) : (
            <button
              type="submit"
              className="w-full p-3 bg-slate-800 font-medium text-xl text-white"
            >
              Login
            </button>
          )}

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
