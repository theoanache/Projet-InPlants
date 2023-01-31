import React from "react";
import Logo from "../assets/logo.png";
import CoeurGris from "../assets/coeur-gris.png";
import Search from "../assets/search-gris.png";
import User from "../assets/user-gris.png";

function Header() {
  return (
    <div className="flex items-end justify-between w-screen pt-8">
      <div className="w-28 ml-12">
        <img src={Logo} alt="logo Inplants" />
      </div>
      <div className="flex gap-8 font-semibold text-grey text-lg">
        <h4 className=" hover:text-green">Accueil</h4>
        <h4 className=" hover:text-green">A propos</h4>
        <h4 className=" hover:text-green">Produits</h4>
        <h4 className=" hover:text-green">Contact</h4>
      </div>
      <div className="flex justify-end gap-5 w-6 mr-12">
        <img src={Search} alt="icon loupe" />
        <img src={CoeurGris} alt="icon favori" />
        <img src={User} alt="icon utilisateur" />
      </div>
    </div>
  );
}

export default Header;
