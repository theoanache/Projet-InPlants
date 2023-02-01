import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import axios from "axios";

function Plantes() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [plantDetails, setPlantDetails] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/plants/${id}`;
    axios.get(url).then((response) => {
      setPlantDetails(response.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex h-full w-full pl-12">
          <div className="flex flex-col w-1/2">
            <h4 className="font-black text-darkgrey text-7xl w-1/2 mt-24">
              {plantDetails[0].name}
            </h4>
            <p className="mt-4 text-grey w-2/3">
              {plantDetails[0].description}
            </p>
            <p>Origine : {plantDetails[0].Origin}</p>
            <p>Ensoleillement</p>
            <p>arrosage</p>
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
            <div className="absolute md:drop-shadow-xl flex items-center backdrop-blur-sm bg-gray rounded-[16px] h-24 w-60 top-64 -left-24">
              <div className="pl-5 pt-4 ml-2 w-[80px] h-[80px] bg-white rounded-lg ">
                <img className="h-4/5" src="" alt="icon meilleur vente" />
              </div>
              <div className="pl-2">
                <h4 className="text-black font-bold">Notre astuce !</h4>
                <h4 className="text-white ">Philodendron</h4>
                <h4 className="text-white ">Aracées</h4>
              </div>
            </div>
            <img className="h-[600px]" src="" alt="plante du moment" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Plantes;
