import React, { useEffect, useRef, useState } from "react";
import Container from "./../common/Container";
import Flex from "./../common/Flex";
import Image from "./../common/Image";
import logo from "../../assets/logo.png";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { Link } from "react-router-dom";
import { FaBars, FaFacebook, FaPhone } from "react-icons/fa6";

const Navigation = () => {
  const [tog, setTog] = useState(false);
  const togref = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      togref.current.contains(e.target) ? setTog(true) : setTog(false);
    });
  }, []);
  return (
    <nav className=" py-2 bg-white">
      <Container>
        <Flex className="items-center">
          <div className=" w-1/2 lg:w-4/12">
            <Link to="/">
              <Image className="w-[80px]" src={logo} alt="logo" />
            </Link>
          </div>

          <div
            className={` absolute top-[75px] z-[100] ${
              tog ? "left-0" : "left-[-100%]"
            } w-full bg-white lg:w-4/12 lg:static`}
          >
            <List className="flex flex-col lg:flex-row items-center justify-center gap-5">
              <ListItem>
                <Link className="font-bold text-lg text-red-700" to="/">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link className="font-bold text-lg text-red-700" to="/about">
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link className="font-bold text-lg text-red-700" to="/shop">
                  Shop
                </Link>
              </ListItem>
              <ListItem>
                <Link className="font-bold text-lg text-red-700" to="/news">
                  News & Updates
                </Link>
              </ListItem>
            </List>
          </div>
          <div className=" w-1/2 lg:w-4/12">
            <Flex className="items-center justify-end gap-4">
              <List className="flex items-end flex-row justify-end gap-3 xl:gap-5">
                <ListItem>
                  <a className="flex items-center gap-2" href="">
                    <FaFacebook className="text-[20px] text-blue-500" />
                    <span className=" font-bold hidden lg:block xl:text-lg text-black">
                      Facebook
                    </span>
                  </a>
                </ListItem>
                <ListItem>
                  <a className="flex items-center gap-2" href="">
                    <FaPhone className="text-[20px] text-black" />
                    <span className=" font-bold hidden lg:block xl:text-lg text-black">
                      05141841844
                    </span>
                  </a>
                </ListItem>
              </List>
              <div ref={togref}>
                <FaBars className=" block lg:hidden text-[20px]" />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
