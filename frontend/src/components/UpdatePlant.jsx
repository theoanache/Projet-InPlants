/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import React, { useState } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";

function UpdatePlant({ plant }) {
  const [plante, setPlante] = useState({
    name: plant.name || null,
    family: plant.family || null,
    description: plant.description || null,
    Origin: plant.Origin || null,
    sunshine: plant.sunshine || null,
    arrosage: plant.arrosage || null,
    feuillage: plant.feuillage || null,
  });

  const handleChange = (event) => {
    setPlante({ ...plante, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/plants/${plant.id}`, {
        name: plante.name || plant.name,
        family: plante.family || plant.family,
        description: plante.description || plant.description,
        Origin: plante.Origin || plant.Origin,
        sunshine: plante.sunshine || plant.sunshine,
        arrosage: plante.arrosage || plant.arrosage,
        feuillage: plante.feuillage || plant.feuillage,
      })
      .then((res) => res);
  };

  return (
    <div className="flex md:drop-shadow-xl rounded-lg bg-white w-[80%] h-[470px]">
      <div className="max-w-[200px] min-w-[200px] pl-4 h-full flex justify-center items-center  ">
        <ImgCard image={plant.image} />
      </div>
      <div className="text-sm text-black flex flex-col w-[75%]">
        <div className="flex flex-col mb-1">
          <label className="font-semibold text-grey" htmlFor="Nom">
            Nom
          </label>
          <input
            className="pl-1 border-2 border-gray  rounded-lg"
            type="text"
            name="name"
            defaultValue={plant.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="font-semibold text-grey" htmlFor="family">
            family
          </label>
          <input
            className="pl-1 border-2 border-gray  rounded-lg"
            type="text"
            name="family"
            defaultValue={plant.family}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-1 ">
          <label className="font-semibold text-grey" htmlFor="description">
            description
          </label>
          <textarea
            className="pl-1 border-2 border-gray  rounded-lg h-24"
            type="text"
            name="description"
            defaultValue={plant.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="font-semibold text-grey" htmlFor="Origine">
            Origine
          </label>
          <input
            className="pl-1 border-2 border-gray rounded-lg"
            type="text"
            name="Origin"
            defaultValue={plant.Origin}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="font-semibold text-grey" htmlFor="sunshine">
            Ensoleillement
          </label>
          <input
            className="pl-1 border-2 border-gray rounded-lg"
            type="text"
            name="sunshine"
            defaultValue={plant.sunshine}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="font-semibold text-grey" htmlFor="arrosage">
            arrosage
          </label>
          <input
            className="pl-1 border-2 border-gray  rounded-lg"
            type="text"
            name="arrosage"
            defaultValue={plant.arrosage}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="font-semibold text-grey" htmlFor="feuillage">
            feuillage
          </label>
          <input
            className="pl-1 border-2 border-gray  rounded-lg"
            type="text"
            name="feuillage"
            defaultValue={plant.feuillage}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="bg-green text-white font-bold text-lg py-2 pt-2 w-[20%] rounded"
          onClick={handleClick}
        >
          Modifier
        </button>
      </div>
    </div>
  );
}

UpdatePlant.propTypes = {
  plant: PropTypes.shape({
    Origin: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    arrosage: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    feuillage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sunshine: PropTypes.string.isRequired,
  }),
};

export default UpdatePlant;
