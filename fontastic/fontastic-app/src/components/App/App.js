import Header from "../Header/Header.js";
// import Artefact from "../Artefact/Artefact";
import ArtefactScreenOverview from "../ArtefactScreenOverview/ArtefactScreenOverview.js";
import artefactData from "../../artefactData.js";
// import ArtefactScreen from "../ArtefactScreen/ArtefactScreen.js";
// import styles from "./ArtefactScreen.module.css";
import "./App.css";

function App() {
  return (
    <div className="bg-Container">
      <Header />
      <div className="app-Container">
        <ArtefactScreenOverview artefactData={artefactData} />
        {/* <ArtefactScreen artefactData={artefactData} /> */}
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
