import PropTypes from "prop-types";
import React from "react";

function ImgCard({ image }) {
  return (
    <div className="">
      <img
        className="w-[80%]"
        src={`http://localhost:5000/assets/images/${image}`}
        alt="plante"
      />
    </div>
  );
}

ImgCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImgCard;
