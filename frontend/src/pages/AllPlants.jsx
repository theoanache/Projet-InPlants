import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdatePlant from "./UpdatePlant";

function AllPlants() {
  const [plants, setPlants] = useState([]);
  const [family, setFamily] = useState([]);
  const [selectedFamily, setSelectedFamily] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/plants")
      .then((res) => setPlants(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/family")
      .then((res) => setFamily(res.data));
  }, []);
  const handleChange = (event) => {
    setSelectedFamily(event.target.value);
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-around  pt-8">
        <h4 className="font-bold text-2xl pt-2 pb-4 ">
          Listing des plantes pour modification
        </h4>
        <select
          className="w-[20%] h-[40px] rounded-lg pl-4"
          onChange={handleChange}
        >
          <option value="">Toutes les famille </option>
          {family.map((element) => (
            <option key={element.id} value={element.title}>
              {element.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {plants
          .filter(
            (plant) => selectedFamily === "" || plant.family === selectedFamily
          )
          .map((plant) => (
            <UpdatePlant plant={plant} key={plant.id} />
          ))}
      </div>
    </div>
  );
}

export default AllPlants;
