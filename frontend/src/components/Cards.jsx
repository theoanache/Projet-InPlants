import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ImgCard from "./ImgCard";
import fleche from "../assets/fleche.png";
import flecheD from "../assets/flecheD.png";
import AddPlant from "./AddPlant";

function Cards() {
  const { id } = useParams();
  const scrl = useRef(null);
  const [plants, setPlants] = useState([]);
  const [scrollX, setscrollX] = useState(0);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
  };

  const deletePlant = () => {
    axios
      .delete(`http://localhost:5000/plants/${id}`)
      .then((res) => setPlants(res));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/plants")
      .then((res) => setPlants(res.data));
  }, []);

  return (
    <div className="flex items-center justify-center w-[95%]">
      <button
        className="w-20 h-20 p-2 md:drop-shadow-xl"
        type="button"
        onClick={() => slide(-366)}
      >
        <img src={fleche} alt="icon fleche" />
      </button>

      <div
        ref={scrl}
        className="h-[230px] flex gap-4 overflow-x-scroll w-[90%] pb-8 md:drop-shadow-xl"
      >
        {plants.map((plant) => (
          <Link to={`/plante/${plant.id}`}>
            <div
              key={plant.id}
              className="flex items-center mt-5 bg-white h-[100%] min-w-[350px] rounded-[20px]"
            >
              <div className="h-full w-1/2 flex items-center">
                <ImgCard image={plant.image} />
              </div>
              <div className="w-1/2 relative">
                <div
                  className="-top-8 left-32 absolute w-[30px] h-[30px] bg-red-700 right-1 rounded-full z-2 text-white flex items-center justify-center font-black text-md cursor-pointer"
                  role="presentation"
                  onClick={() => deletePlant(id)}
                >
                  &#x2715;
                </div>
                <h2 className="font-bold text-lg ">{plant.name}</h2>
                <h2 className="text-grey">Famille : {plant.family}</h2>
                <h2 className="font-bold text-lg mt-4">{plant.price}€</h2>
              </div>
            </div>
          </Link>
        ))}
        <div className="md:drop-shadow-xl mt-5 h-full">
          <AddPlant />
        </div>
      </div>
      <button
        className="w-20 h-20 p-2 md:drop-shadow-xl"
        type="button"
        onClick={() => slide(+366)}
      >
        <img src={flecheD} alt="icon fleche" />
      </button>
    </div>
  );
}

export default Cards;
