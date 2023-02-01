import React, { useState } from "react";
import axios from "axios";
import aloe from "../assets/aloevera.png";

function AddPlant() {
  const [plant, setPlant] = useState({
    name: "",
    family: "",
    price: "",
    isfavorite: false,
  });

  const handleChange = (event) => {
    setPlant({ ...plant, [event.target.name]: event.target.value });
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/plants", {
        name: plant.name,
        family: plant.family,
        price: plant.price,
        isfavorite: plant.isfavorite,
      })
      .then((response) => response)
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={submitActionHandler}>
      <div className="flex items-center bg-green min-w-[350px] rounded-[20px]">
        <div className="h-full w-1/2 flex items-center">
          <img src={aloe} alt="plante" />
        </div>
        <div className="w-1/2 relative">
          <div className="flex flex-col gap-2 mr-3 rounded-lg text-sm">
            <input
              type="text"
              name="name"
              placeholder="nom de la plante"
              className="pl-1"
              onChange={handleChange}
              value={plant.name}
            />
            <input
              type="text"
              name="family"
              value={plant.family}
              placeholder="famille de la plante"
              className="pl-1"
              onChange={handleChange}
            />
            <input
              className="mt-6 pl-1"
              type="text"
              name="price"
              value={plant.price}
              placeholder="Prix"
              onChange={handleChange}
            />
            <button type="submit" className="h-6 text-sm bg-white rounded-lg">
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddPlant;
