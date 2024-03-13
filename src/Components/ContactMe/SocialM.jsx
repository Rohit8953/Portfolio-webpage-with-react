import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
const SocialM = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="hover:scale-110 transition-all duration-200 border-2 border-blue-500 p-[0.1rem] rounded-full">
        <a href="https://www.linkedin.com/in/rohit-kumar-chaurasia-220742243/">
          <FaLinkedin className="rounded-full  text-blue-500" />
        </a>
      </div>

      <div className="border-2 hover:scale-110 transition-all duration-200 border-orange-400 p-[0.1rem] rounded-full">
        <a href="https://github.com/Rohit8953">
          <RxGithubLogo className="text-orange-400" />
        </a>
      </div>

      <div className="border-2 hover:scale-110 transition-all duration-200 border-red-500 p-[0.1rem] rounded-full">
        <a href="https://www.instagram.com/rohitchaurasia2452/">
          <FaInstagramSquare className="rounded-full text-red-500" />
        </a>
      </div>

      <div className="border-2 hover:scale-110 transition-all duration-200 border-blue-500 p-[0.1rem] rounded-full">
        <a href="https://www.facebook.com/profile.php?id=100054259549450">
          <FaFacebookSquare className="rounded-full text-blue-500" />
        </a>
      </div>

      <div className="border-2 hover:scale-110 transition-all duration-200 border-green-500 p-[0.1rem] rounded-full">
        <a href="">
          <FaWhatsappSquare className="rounded-full text-green-500" />
        </a>
      </div>
    </div>
  );
};

export default SocialM;
