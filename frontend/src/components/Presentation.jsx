import React from "react";
import { Link } from "react-router-dom";
import plante from "../assets/plante.png";
import BestDeal from "../assets/best-deal.png";
import Cards from "./Cards";

function Presentation() {
  return (
    <div>
      <div className="flex h-full w-full pl-12">
        <div className="flex flex-col w-1/2">
          <h4 className="font-black text-darkgrey text-7xl w-1/2 mt-24">
            Vente de Plantes d'Interieurs
          </h4>
          <p className="mt-4 text-grey w-2/3">
            Les plus belles plantes d’intérieur sont utilisées pour décorer et
            embellir les pièces d’une maison ou d’un appartement et apaiser son
            atmosphère. Faciles à entretenir, elles sont capables de s’adapter à
            des milieux insuffisamment éclairés et parfois surchauffés.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-tl-lg mt-4 w-[180px] h-[40px] bg-green font-bold text-base text-white "
            >
              {" "}
              Ajouter au panier
            </button>
            <Link to="/about">
              <button
                type="button"
                className="rounded-br-lg mt-4 w-[180px] h-[40px] bg-white font-bold text-base text-grey "
              >
                {" "}
                En savoir plus
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute md:drop-shadow-xl flex items-center backdrop-blur-sm bg-gray rounded-[16px] h-24 w-60 top-64 -left-24">
            <div className="pl-5 pt-4 ml-2 w-[80px] h-[80px] bg-white rounded-lg ">
              <img className="h-4/5" src={BestDeal} alt="icon meilleur vente" />
            </div>
            <div className="pl-2">
              <h4 className="text-black font-bold">Meilleure Vente</h4>
              <h4 className="text-white ">Philodendron</h4>
              <h4 className="text-white ">Aracées</h4>
            </div>
          </div>
          <img className="h-[600px]" src={plante} alt="plante du moment" />
        </div>
      </div>
      <div className="flex justify-center">
        <Cards />
      </div>
    </div>
  );
}

export default Presentation;
