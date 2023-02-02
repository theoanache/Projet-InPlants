import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Caddie from "../assets/caddie.png";
import Search from "../assets/search-gris.png";
import User from "../assets/user-gris.png";

function Header() {
  const Navbar = [
    { id: 1, title: "Accueil", link: "/" },
    { id: 2, title: "A propos", link: "/about" },
    { id: 3, title: "Plantes", link: "/plante" },
    { id: 4, title: "Contact", link: "/contact" },
  ];

  return (
    <div className="flex items-end justify-between w-screen pt-8">
      <Link to="/">
        <div className="w-28 ml-12">
          <img src={Logo} alt="logo Inplants" />
        </div>
      </Link>
      <div className="flex gap-8 font-semibold text-grey text-lg">
        {Navbar.map((element) => (
          <NavLink key={element.key} to={element.link}>
            <h4 className="pl-3 pr-3 pt-1 pb-1 rounded-[10px] hover:text-white hover:bg-green">
              {element.title}
            </h4>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-end gap-5 w-6 mr-12">
        <img src={Search} alt="icon loupe" />
        <img src={Caddie} alt="icon favori" />
        <img src={User} alt="icon utilisateur" />
      </div>
    </div>
  );
}

export default Header;
