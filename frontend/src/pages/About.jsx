import React from "react";
import Deco from "../assets/deco.jpg";
import pictoW from "../assets/picto-white.png";

function About() {
  return (
    <div className="mt-10 mb-10 pl-4 pr-4 w-screen h-[screen] flex flex-row max-sm:flex-col-reverse max-sm:gap-4">
      <div className=" h-screen w-3/5 flex justify-center max-sm:w-full max-sm:h-1/2">
        <img className="w-full" src={Deco} alt="plante d'interieur" />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-green rounded-[40px]">
        <img
          className="w-28 max-sm:w-12 max-sm:mt-4"
          src={pictoW}
          alt="logo blanc"
        />
        <h4 className="mt-12 text-white text-3xl font-bold w-[70%] max-sm:text-xl max-sm:w-[80%] max-sm:mt-6">
          Notre sélection de plantes vertes pour votre intérieur
        </h4>
        <p className="mt-4 w-2/3 mb-10 text-white">
          Chez Planteschezvous.com, nous vous proposons des plantes d'exception
          que nous avons chouchoutées et fait grandir spécialement pour vous.
          Pas besoin d'attendre des années pour que votre plante d'intérieur
          arrive à sa taille normale ! Nous assurons la livraison de votre
          plante au meilleur de sa vitalité.Des plantes vertes au feuillage
          coloré, exotique ou encore graphique, vous trouverez forcément votre
          bonheur. Découvrez également tous nos conseils pour prendre soin de
          votre future plante.
        </p>
      </div>
    </div>
  );
}

export default About;
