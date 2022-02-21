import Header from "../Header/Header.js";
// import Artefact from "../Artefact/Artefact";
import ArtefactScreenOverview from "../ArtefactScreenOverview/ArtefactScreenOverview.js";
// import artefactData from "../../artefactData.js";
// import ArtefactScreen from "../ArtefactScreen/ArtefactScreen.js";
// import styles from "./ArtefactScreen.module.css";
import About from "../AboutScreen/About.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="bg-Container">
      <Header />
      <div className="app-Container">
        {" "}
        <Routes>
          <Route path="/" element={<ArtefactScreenOverview />} />
          <Route path="about" element={<About />} />{" "}
          {/* <ArtefactScreenOverview artefactData={artefactData} /> */}
          {/* <ArtefactScreen artefactData={artefactData} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

//INSTALLATION FOR ICONS OF REACT ICONS
//https://react-icons.github.io/react-icons/icons?name=io5
// npm install react-icons --save
// IMPORT
// import { IconName } from "react-icons/io5";
