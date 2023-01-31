import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";
import fleche from "../assets/fleche.png";
import flecheD from "../assets/flecheD.png";
import CoeurC from "../assets/coeur-contour.png";
import CoeurVert from "../assets/coeur-vert.png";

function Cards() {
  const scrl = useRef(null);
  const [plants, setPlants] = useState([]);
  const [favorites, setFavorites] = useState(CoeurC);
  const [scrollX, setscrollX] = useState(0);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
  };

  const handleclick = () => {
    setFavorites(CoeurVert);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/plants")
      .then((res) => setPlants(res.data));
  }, []);

  return (
    <div className="flex items-center justify-center w-[95%]">
      <button
        className="w-20 h-20 p-2 md:drop-shadow-xl"
        type="button"
        onClick={() => slide(-366)}
      >
        <img src={fleche} alt="icon fleche" />
      </button>

      <div
        ref={scrl}
        className="h-[230px] flex gap-4 overflow-x-scroll w-[90%] pb-8 md:drop-shadow-xl"
      >
        {plants.map((plant) => (
          <div className="flex items-center bg-white min-w-[350px] rounded-[20px]">
            <div className="h-full w-1/2 flex items-center">
              <ImgCard image={plant.image} />
            </div>
            <div className="w-1/2 relative">
              <img
                className="h-5 absolute -top-10 left-32 cursor-pointer"
                src={favorites}
                alt="icon favorite"
                onClick={handleclick}
                role="presentation"
              />
              <h2 className="font-bold text-lg ">{plant.name}</h2>
              <h2 className="text-grey">Famille : {plant.family}</h2>
              <h2 className="font-bold text-lg mt-4">{plant.price}€</h2>
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-20 h-20 p-2 md:drop-shadow-xl"
        type="button"
        onClick={() => slide(+366)}
      >
        <img src={flecheD} alt="icon fleche" />
      </button>
    </div>
  );
}

export default Cards;
