import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import fleche from "../assets/fleche.png";
import flecheD from "../assets/flecheD.png";
import AddPlant from "./AddPlant";
import DeleteCard from "./DeleteCard";

function Cards() {
  const scrl = useRef(null);
  const [plants, setPlants] = useState([]);
  const [scrollX, setscrollX] = useState(0);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/plants")
      .then((res) => setPlants(res.data));
  }, []);

  return (
    <div className="flex items-center justify-center w-[95%]">
      <button
        className="w-20 h-20 p-2 md:drop-shadow-xl max-sm:hidden"
        type="button"
        onClick={() => slide(-366)}
      >
        <img src={fleche} alt="icon fleche" />
      </button>

      <div
        ref={scrl}
        className="h-[250px] flex gap-4 overflow-x-scroll w-[90%] pb-8 md:drop-shadow-xl max-sm:mt-24"
      >
        {plants.map((plant) => (
          <DeleteCard plant={plant} key={plant.id} />
        ))}
        <div className="md:drop-shadow-xl mt-5 h-full">
          <AddPlant />
        </div>
      </div>
      <button
        className="w-20 h-20 p-2 md:drop-shadow-xl max-sm:hidden"
        type="button"
        onClick={() => slide(+366)}
      >
        <img src={flecheD} alt="icon fleche" />
      </button>
    </div>
  );
}

export default Cards;
