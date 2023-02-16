import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsGithub } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer absolute bottom items-center p-4 px-5 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <img src={logo} alt="herocode logo" width={70} />
        <p>Copyright © 2023 HeroCode - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          to="https://www.instagram.com/mufkimustache/"
          className="text-2xl"
        >
          <BsInstagram />
        </Link>
        <Link to="https://twitter.com/AbdillahMufky" className="text-2xl">
          <BsTwitter />
        </Link>
        <Link
          to="https://www.facebook.com/abdillah.mufkiauzan/"
          className="text-2xl"
        >
          <BsFacebook />
        </Link>
        <Link to="https://github.com/abdillahmufki" className="text-2xl">
          <BsGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
