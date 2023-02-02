import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom/dist";
import axios from "axios";
import ImgCard from "../components/ImgCard";
import Minipelle from "../assets/minipelle.png";
import flecheD from "../assets/flecheD.png";
import flecheG from "../assets/fleche.png";

function Plantes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [plantDetails, setPlantDetails] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/plants/${id}`;
    axios.get(url).then((response) => {
      setPlantDetails(response.data);
      setLoading(false);
    });
  }, [id]);

  const changePlant = (where, idP) => {
    if (idP === 1 && where === "back") {
      return;
    }
    // eslint-disable-next-line no-unused-expressions
    where === "next"
      ? navigate(`/plante/${idP + 1}`)
      : navigate(`/plante/${idP - 1}`);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex h-screen w-full pl-12 pt-6 bg-background max-sm:flex-col">
          <div className="flex flex-col w-1/2 max-sm:w-full">
            <h4 className="font-black text-darkgrey text-7xl w-1/2 mt-24 max-sm:mt-6">
              {plantDetails[0].name}
            </h4>
            <p className="mt-4 text-grey w-2/3">
              {plantDetails[0].description}
            </p>
            <p className="pt-4 text-green">
              {" "}
              <span className="font-bold">Origine : </span>{" "}
              {plantDetails[0].Origin}
            </p>
            <p className="text-green">
              <span className="font-bold">Ensoleillement :</span>{" "}
              {plantDetails[0].sunshine}
            </p>
            <p className="text-green">
              <span className="font-bold">Arrosage : </span>
              {plantDetails[0].arrosage}
            </p>
            <p className="text-green">
              {" "}
              <span className="font-bold">feuillage :</span>{" "}
              {plantDetails[0].feuillage}
            </p>
            <p className="text-black text-xl mt-8">
              {" "}
              <span className="font-bold">Prix</span> {plantDetails[0].price} €
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-lg mt-4 w-[180px] h-[40px] bg-green font-bold text-base text-white "
              >
                {" "}
                Ajouter au panier
              </button>
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="absolute md:drop-shadow-xl flex items-center backdrop-blur-sm bg-white rounded-[16px] h-24 w-60 top-64 -left-24 max-sm:hidden">
              <div className=" ml-2 flex items-center justify-center w-[85px] h-[80px] bg-green rounded-lg ">
                <img
                  className="h-4/5"
                  src={Minipelle}
                  alt="icon meilleur vente"
                />
              </div>
              <div className="pl-2 text-green">
                <h4 className="font-bold">Notre astuce !</h4>
                <h4>Rempoté au</h4>
                <h4>printemps</h4>
              </div>
            </div>
            <ImgCard image={plantDetails[0].image} />
            {plantDetails[0].id > 1 && (
              <button
                className="w-20 h-20 p-2 md:drop-shadow-xl absolute -left-8 top-[70%] max-sm:hidden"
                type="button"
                onClick={() => changePlant("back", plantDetails[0].id)}
              >
                <img src={flecheG} alt="icon fleche" />
              </button>
            )}
            <button
              className="w-20 h-20 p-2 md:drop-shadow-xl absolute right-28 top-[70%] max-sm:hidden"
              type="button"
              onClick={() => changePlant("next", plantDetails[0].id)}
            >
              <img src={flecheD} alt="icon fleche" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Plantes;
