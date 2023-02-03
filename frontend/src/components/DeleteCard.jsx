import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ImgCard from "./ImgCard";

function DeleteCard({ plant }) {
  const deletePlant = () => {
    axios.delete(`http://localhost:5000/plants/${plant.id}`).then((res) => res);
  };

  return (
    <div
      key={plant.id}
      className="flex items-center mt-5 bg-white h-[250px] min-w-[350px] rounded-[20px] group hover:relative hover:bg-green hover:text-white hover:shadow-xl transition duration-300 ease-in-out transform hover:h-[400px]"
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
        <h2 className="font-bold text-lg group-hover:text-white">
          {plant.name}
        </h2>
        <h2 className="text-grey  group-hover:text-white">
          Famille : {plant.family}
        </h2>
        {/* <h2 className="hidden group-hover:block">
          Ensoleillement :{plant.sunshine}
        </h2>
        <h2 className="hidden group-hover:block">
          Arrossage :{plant.arrosage}
        </h2> */}

        <h2 className="font-bold text-lg mt-4">{plant.price}€</h2>
        <Link to={`/plante/${plant.id}`}>
          <button
            type="button"
            className="bg-green text-white rounded-lg text-sm w-24 h-8 mt-2  group-hover:bg-white  group-hover:text-black  group-hover:font-bold"
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
    family: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default DeleteCard;
