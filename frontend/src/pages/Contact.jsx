import React from "react";
import Deco from "../assets/deco.jpg";
import pictoW from "../assets/picto-white.png";
import In from "../assets/picto-linkedin.png";
import Mail from "../assets/picto-mail.png";

function Contact() {
  return (
    <div className="mt-10 mb-10 pl-4 pr-4 w-screen h-[screen] flex max-sm:flex-col-reverse max-sm:gap-4">
      <div className=" h-screen w-3/5 flex justify-center max-sm:h-1/2 max-sm:w-full">
        <img className="w-full" src={Deco} alt="plante d'interieur" />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-green rounded-[40px]">
        <img
          className="w-28 max-sm:w-12 max-sm:mt-5"
          src={pictoW}
          alt="logo blanc"
        />
        <h4 className="mt-12 max-sm:mt-4 text-white text-3xl font-bold">
          Contactez-Nous
        </h4>
        <div className="flex gap-5 mt-10 max-sm:mb-4">
          <a href="https://www.linkedin.com/in/theoanache/">
            <img className="w-16" src={In} alt="picto linkedin" />
          </a>
          <a href="mailto:theoo.anache@gmail.com">
            <img className="w-16" src={Mail} alt="picto mail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
