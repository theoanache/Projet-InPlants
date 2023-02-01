import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgCard from "../components/ImgCard";

function AllPlants() {
  const [plants, setPlants] = useState([]);

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
            className="flex md:drop-shadow-xl rounded-lg bg-white  w-[48%] h-[220px]"
          >
            <div className="w-2/5">
              <ImgCard image={plant.image} />
            </div>
            <div>
              <h4>{plant.name}</h4>
              <p className="text-sm">{plant.description}</p>
              <h4>{plant.Origin}</h4>
              <h4>{plant.sunshine}</h4>
              <h4>{plant.arrosage}</h4>
              <h4>{plant.feuillage}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPlants;
