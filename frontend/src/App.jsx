import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Tailwind.css";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plantes from "./pages/Plantes";
import Favorites from "./pages/Favorites";
import AllPlants from "./pages/AllPlants";

function App() {
  return (
    <div className="bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/plante" element={<AllPlants />} />
        <Route path="/plante/:id" element={<Plantes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
