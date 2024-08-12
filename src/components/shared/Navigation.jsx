import React from "react";
import Container from "./../common/Container";
import Flex from "./../common/Flex";
import Image from "./../common/Image";
import logo from "../../assets/logo.png";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className=" py-2">
      <Container>
        <Flex className="items-center">
          <div className="w-1/2">
            <Link to="/">
              <Image className=" w-[50px] md:w-[80px]" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="w-1/2">
            <List className="flex items-end flex-col md:flex-row justify-end gap-3 xl:gap-5">
              <ListItem>
                <a className="flex items-center gap-2" href="">
                  <FaFacebook className=" text-base xl:text-[20px] text-blue-500" />
                  <span className=" font-bold text-base xl:text-lg text-black">
                    Facebook
                  </span>
                </a>
              </ListItem>
              <ListItem>
                <a className="flex items-center gap-2" href="">
                  <FaPhone className=" text-base xl:text-[20px] text-black" />
                  <span className=" font-bold text-base xl:text-lg text-black">
                    05141841844
                  </span>
                </a>
              </ListItem>
            </List>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
