import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nbar from "./Routing/Nbar";
import Homepp from "./Routing/Homep";
import EditProduct from "./Routing/EditPd";
import AddProduct from "./Routing/AddPd";
import Log from "./login/LogIn";
import SinUp from "./login/SinUp";
import Weather from "./login/Weather";
import Home1 from "./HomeComponent";
import Home2 from "./Home2";





function App() {
  const log = localStorage.getItem("token");
  console.warn(log);
  return (
    <div style={{ textAlign: "center" }}>
    <BrowserRouter>
      <Nbar/>
      <Routes>
     
        <Route path="/" element={<Home1/>} />
        <Route path="/home" element={<Home2/>} />
     
          <Route path="/Login" element={<Log/>} />
          <Route path="/reg" element={<SinUp />} />
         
        
      
     </Routes>
 </BrowserRouter>
    </div>
  );
}
export default App;
