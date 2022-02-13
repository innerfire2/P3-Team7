import Header from "../Header/Header.js";
import Artefact from "../Artefact/Artefact";
import artefactData from "../../artefactData.js";
// import styles from "./ArtefactScreen.module.css";
import "./App.css";

function App() {
  return (
    <div className="bg-Container">
      <Header />
      <div className="app-Container">
        {artefactData.map((item) => (
          <Artefact artefactData={item} key={item.id} />
        ))}
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
