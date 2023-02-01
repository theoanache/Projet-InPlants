import React from "react";
import Deco from "../assets/deco.jpg";
import pictoW from "../assets/picto-white.png";

function About() {
  return (
    <div className="mt-10 mb-10 pl-4 pr-4 w-screen h-[screen] flex">
      <div className=" h-screen w-3/5 flex justify-center">
        <img className="w-full" src={Deco} alt="plante d'interieur" />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-green rounded-[40px]">
        <img className="w-28 " src={pictoW} alt="logo blanc" />
        <h4 className="mt-12 text-white text-3xl font-bold">
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
