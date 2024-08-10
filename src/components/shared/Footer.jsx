import React from "react";
import logo from "../../assets/logo.png";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import List from "../common/List";
import ListItem from "../common/ListItem";

const Footer = () => {
  return (
    <footer className="bg-red-600 py-7">
      <Container>
        <Flex>
          <div className="w-5/12">
            <Image className="w-[80px]" src={logo} alt="logo" />

            <h1 className="mt-5 font-bold text-2xl text-white">
              M/S S M Corporation
            </h1>

            <h2 className=" mt-2 font-medium text-base text-white">
              Address: Apt. 485 7953 Yost Club, West Cristobal, MO 58371-8183
            </h2>

            <p className=" mt-2 font-medium text-base text-white">
              Phone: 05141841844 , 05141841844
            </p>
            <p className=" mt-2 font-medium text-base text-white">
              Email: test@email.com
            </p>
          </div>
          <div className="w-2/12">
            <h2 className=" font-semibold text-xl text-white mb-5">Pages</h2>

            <List>
              <ListItem className="font-normal text-lg text-white mb-2">
                Home
              </ListItem>

              <ListItem className="font-normal text-lg text-white mb-2">
                Shop
              </ListItem>
              <ListItem className="font-normal text-lg text-white mb-2">
                Account
              </ListItem>
              <ListItem className="font-normal text-lg text-white mb-2">
                Privacy Policy
              </ListItem>
            </List>
          </div>
          <div className="w-2/12">
            <h2 className=" font-semibold text-xl text-white mb-5">About us</h2>

            <List>
              <ListItem className="font-normal text-lg text-white mb-2">
                Our Vision
              </ListItem>
              <ListItem className="font-normal text-lg text-white mb-2">
                Our Dealers
              </ListItem>
            </List>
          </div>
          <div className="w-3/12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d29203.68370943054!2d90.38131880000003!3d23.8022198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sbn!2sbd!4v1723303717196!5m2!1sbn!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Flex>
      </Container>

      <div className="text-center py-4">
        <a
          className=" font-medium text-base text-white"
          href="https://republic-of-legends.netlify.app/"
          target="_blank"
        >
          Developed by Mahmood Hassan Rameem || ROL Studio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
