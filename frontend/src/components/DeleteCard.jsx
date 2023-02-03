import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ImgCard from "./ImgCard";
import arrosoir from "../assets/arrosoir-blanc.png";
import Ombre from "../assets/ombre-blanc.png";
import miOmbre from "../assets/mi-ombre.png";
import soleil from "../assets/soleil-blanc.png";
import goutte from "../assets/goutte-blanc.png";

function DeleteCard({ plant }) {
  const [ensoleillement, setEnsoleillement] = useState("");

  useEffect(() => {
    if (plant.sunshine === "Ombre") {
      setEnsoleillement(Ombre);
    } else if (plant.sunshine === "Mi-ombre") {
      setEnsoleillement(miOmbre);
    } else {
      setEnsoleillement(soleil);
    }
  }, []);

  const deletePlant = () => {
    axios.delete(`http://localhost:5000/plants/${plant.id}`).then((res) => res);
  };

  return (
    <div
      key={plant.id}
      className="flex items-center mt-5 bg-white h-[250px] min-w-[350px] rounded-[20px] group hover:relative hover:bg-green hover:text-white hover:shadow-xl transition duration-250 ease-in-out transform hover:h-[400px]"
    >
      <div className="h-full w-1/2 flex items-center group-hover:absolute group-hover:-translate-x-8 group-hover:-translate-y-36 transition duration-200 transform  group-hover:scale-150 group-hover:w-[300px] ">
        <ImgCard image={plant.image} />
      </div>
      <div className="w-1/2 relative group-hover:translate-y-32 group-hover:translate-x-2 group-hover:w-full">
        <div
          className="-top-6 left-32 absolute w-[30px] h-[30px] bg-red-700 right-1 rounded-full z-50 text-white flex items-center justify-center font-black text-md cursor-pointer group-hover:translate-x-40 group-hover:-translate-y-48"
          role="presentation"
          onClick={() => deletePlant(plant.id)}
        >
          &#x2715;
        </div>
        <div className="flex group-hover:gap-6">
          <div className="flex-col">
            <h2 className="font-bold text-lg group-hover:text-white">
              {plant.name}
            </h2>
            <h2 className="text-grey text-sm group-hover:text-white">
              Famille : {plant.family}
            </h2>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="hidden group-hover:block text-sm">
                Lumière : &nbsp;
              </h2>
              <img
                className="w-0 group-hover:w-7"
                src={ensoleillement}
                alt="picto ensoleillement"
              />
            </div>
            <div className="hidden group-hover:flex items-center transform duration-200 ease-out">
              <img className="w-6" src={arrosoir} alt="picto arrosoir" />
              <h2 className=" text-sm text-white font-bold ">
                &nbsp; : &nbsp; {plant.arrosage} &nbsp;
              </h2>
              <img className="w-3 h-4" src={goutte} alt="goutte d'eau picto" />
            </div>
          </div>
        </div>
        <h2 className="font-bold text-lg mt-4">{plant.price}€</h2>
        <Link to={`/plante/${plant.id}`}>
          <button
            type="button"
            className="bg-green text-white rounded-lg mb-4 text-sm w-24 h-8 mt-2  group-hover:bg-white  group-hover:text-black  group-hover:font-bold"
          >
            Voir la fiche
          </button>
        </Link>
      </div>
    </div>
  );
}

DeleteCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  plant: PropTypes.shape({
    arrosage: PropTypes.string.isRequired,
    sunshine: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default DeleteCard;
