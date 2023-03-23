import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { Home } from "./components/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateSighting } from './components/CreateSighting';
import { ColourSchemeChecker } from './ColourSchemeChecker';
import { Login } from './components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/backend-checker" element={<BackendConnectionChecker />} />
        <Route path="/sighting/create" element={<CreateSighting />} />
      </Routes>
    </>
  )
}
export default App
