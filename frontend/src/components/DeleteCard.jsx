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
      className="flex items-center mt-5 bg-white h-[100%] min-w-[350px] rounded-[20px]"
    >
      <div className="h-full w-1/2 flex items-center">
        <ImgCard image={plant.image} />
      </div>
      <div className="w-1/2 relative">
        <div
          className="-top-6 left-32 absolute w-[30px] h-[30px] bg-red-700 right-1 rounded-full z-50 text-white flex items-center justify-center font-black text-md cursor-pointer"
          role="presentation"
          onClick={() => deletePlant(plant.id)}
        >
          &#x2715;
        </div>
        <h2 className="font-bold text-lg ">{plant.name}</h2>
        <h2 className="text-grey">Famille : {plant.family}</h2>
        <h2 className="font-bold text-lg mt-4">{plant.price}€</h2>
        <Link to={`/plante/${plant.id}`}>
          <button
            type="button"
            className="bg-green text-white rounded-lg text-sm w-24 h-8 mt-2"
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
