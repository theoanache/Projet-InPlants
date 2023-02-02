import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdatePlant from "./UpdatePlant";

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
          <UpdatePlant plant={plant} key={plant.id} />
        ))}
      </div>
    </div>
  );
}

export default AllPlants;
