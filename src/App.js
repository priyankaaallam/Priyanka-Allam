import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
function Apps() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path= "/About"  element={<About />}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Apps
