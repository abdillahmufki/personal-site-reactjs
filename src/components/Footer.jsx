import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsGithub } from "react-icons/bs";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 px-5 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <img src={logo} alt="herocode logo" width={70} />
        <p>Copyright © 2023 HeroCode - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="#" className="text-2xl">
          <BsInstagram />
        </a >
        <a className="text-2xl">
          <BsTwitter />
        </a>
        <a className="text-2xl">
          <BsFacebook />
        </a>
        <a className="text-2xl">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
