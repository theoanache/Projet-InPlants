import React from "react";
import aloe from "../../assets/aloevera.png";

function AddCards() {
  return (
    <form>
      <div className="flex items-center bg-green min-w-[350px] rounded-[20px]">
        {/* {NewInputArray.map((plant) => (
        <div key={plant.id} className={plant.classNameDiv}>
          <label className="ml-1" htmlFor={plant.name}>
            {plant.label}
          </label>
          <input
            id={plant.id}
            type={plant.type}
            className={plant.classNameInput}
            placeholder={plant.placeholder}
            name={plant.name}
            onChange={handleChange}
          />
        </div>
      ))} */}
        <div className="h-full w-1/2 flex items-center">
          <img src={aloe} alt="plante" />
        </div>
        <div className="w-1/2 relative">
          <div className="flex flex-col gap-2 mr-3 rounded-lg text-sm">
            <input
              type="text"
              name="plante name"
              placeholder="nom de la plante"
              className="pl-1"
            />
            <input
              type="text"
              name="plante family"
              placeholder="famille de la plante"
              className="pl-1"
            />
            <input
              className="mt-6 pl-1"
              type="text"
              name="plante family"
              placeholder="Prix"
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

export default AddCards;
