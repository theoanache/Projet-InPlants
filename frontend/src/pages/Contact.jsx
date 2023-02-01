import React from "react";
import Deco from "../assets/deco.jpg";
import pictoW from "../assets/picto-white.png";
import In from "../assets/picto-linkedin.png";
import Mail from "../assets/picto-mail.png";

function Contact() {
  return (
    <div className="mt-10 mb-10 pl-4 pr-4 w-screen h-[screen] flex">
      <div className=" h-screen w-3/5 flex justify-center">
        <img className="w-full" src={Deco} alt="plante d'interieur" />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-green rounded-[40px]">
        <img className="w-28 " src={pictoW} alt="logo blanc" />
        <h4 className="mt-12 text-white text-3xl font-bold">Contactez-Nous</h4>
        <div className="flex gap-5 mt-10">
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
