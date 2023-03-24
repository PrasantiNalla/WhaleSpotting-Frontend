import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { WhaleSightingDetail } from "./components/WhaleSightingDetail/WhaleSightingDetail"
import { Home } from "./components/Home/Home";
import { SpeciesIdentification } from "./components/SpeciesIdentification/SpeciesIdentification";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { WhaleSightingViewer } from './components/WhaleSightingViewer/WhaleSightingViewer';
import { CreateSighting } from "./components/CreateSighting/CreateSighting";
import { ColourSchemeChecker } from './ColourSchemeChecker';
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/backend-checker" element={<BackendConnectionChecker />} />
        <Route path="/sighting" element={<WhaleSightingViewer />} />
        <Route path="/sightings/submit" element={<CreateSighting />} />
        <Route path="/sightings/:id" element={<WhaleSightingDetail />} />
        <Route path="/whale/species-identification" element={<SpeciesIdentification />} />
      </Routes>
    </>
  )
}
export default App
