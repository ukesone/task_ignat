import React from 'react';
import Name from "./Components/name/Name";
import Cloud from "./Components/cloud/Cloud";
import Map from "./Components/map/Map";


import './App.css';
// import Particles from "react-particles-js";

function App() {

  return (
        <div className="App">

            <Name/>
            <Cloud/>
            <Map/>

        </div>

  );
}

export default App;
