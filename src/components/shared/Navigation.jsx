import React from "react";
import Container from "./../common/Container";
import Flex from "./../common/Flex";
import Image from "./../common/Image";
import logo from "../../assets/logo.png";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { FaFacebook, FaPhone } from "react-icons/fa6";

const Navigation = () => {
  return (
    <nav className=" py-2">
      <Container>
        <Flex className="items-center">
          <div className="w-1/2">
            <Image className="w-[80px]" src={logo} alt="logo" />
          </div>
          <div className="w-1/2">
            <List className="flex items-center justify-end gap-5">
              <ListItem>
                <a className="flex items-center gap-2" href="">
                  <FaFacebook className="text-[20px] text-blue-500" />
                  <span className=" font-bold text-lg text-black">
                    Facebook
                  </span>
                </a>
              </ListItem>
              <ListItem>
                <a className="flex items-center gap-2" href="">
                  <FaPhone className="text-[20px] text-black" />
                  <span className=" font-bold text-lg text-black">
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
