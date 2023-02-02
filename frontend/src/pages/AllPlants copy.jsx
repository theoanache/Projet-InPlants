import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImgCard from "../components/ImgCard";

function AllPlants() {
  const { id } = useParams();
  const [plants, setPlants] = useState([]);
  const [plante, setPlante] = useState({
    name: "",
    description: "",
    Origin: "",
    sunshine: "",
    arrosage: "",
    feuillage: "",
  });

  const handleChange = (event) => {
    setPlante({ ...plante, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/plants/${id}`, {
        name: plante.name,
        description: plante.description,
        Origin: plante.Origin,
        sunshine: plante.sunshine,
        arrosage: plante.arrosage,
        feuillage: plante.feuillage,
      })
      .then((res) => res);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/plants")
      .then((res) => setPlants(res.data));
  }, []);

  return (
    <div className="w-full h-full">
      <h4 className="font-bold text-2xl pt-8 pb-4 pl-5">Listing des plantes</h4>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="flex md:drop-shadow-xl rounded-lg bg-white w-[80%] h-[430px]"
          >
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
                  name="nom"
                  defaultValue={plant.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col mb-1 ">
                <label
                  className="font-semibold text-grey"
                  htmlFor="description"
                >
                  description
                </label>
                <textarea
                  className="pl-1 border-2 border-gray  rounded-lg h-28"
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
                  name="Origine"
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
                className="bg-green text-white font-bold text-lg py-2 w-[20%] rounded"
                onClick={handleClick}
              >
                Modifier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPlants;
