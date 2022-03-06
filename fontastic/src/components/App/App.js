import ArtefactScreenOverview from "../ArtefactScreenOverview/ArtefactScreenOverview.js";
import LoadingScreen from "../LoadingScreen/LoadingScreen.js";
import ArScreen from "../Ar/ArScreen.js";
import ArMode from "../Ar/ArMode.js";
import VideoScreen from "../Video/VideoScreen.js";
import About from "../AboutScreen/About.js";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import fontLogo from "./fontastic.png";

import "./App.css";
import IntroductionScreen from "../IntroScreen/IntroductionSreen.js";

function App() {
  (function () {
    var method;
    var noop = function () {};
    var methods = [
      "assert",
      "clear",
      "count",
      "debug",
      "dir",
      "dirxml",
      "error",
      "exception",
      "group",
      "groupCollapsed",
      "groupEnd",
      "info",
      "log",
      "markTimeline",
      "profile",
      "profileEnd",
      "table",
      "time",
      "timeEnd",
      "timeStamp",
      "trace",
      "warn",
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
      method = methods[length];

      // Only stub undefined methods.
      if (!console[method]) {
        console[method] = noop;
      }
    }
  })();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []); //runs only one time when page is rendered
  return (
    <div className="bg-Container">
      {/* <Header /> */}
      <div className="app-Container">
        {loading ? (
          <div className="Loader">
            <div className="Loader-Content">
              <img className="photo" src={fontLogo} alt="" />
              <PulseLoader size={10} color={"#dee8f0"} loading={loading} />
            </div>
          </div>
        ) : (
          <Routes>
            <Route exact path="/" element={<IntroductionScreen />} />
            <Route exact path="home" element={<ArtefactScreenOverview />} />
            <Route exact path="about" element={<About />} />{" "}
            <Route exact path="ImageGallery" element={<ArScreen />} />
            <Route path="loadingScreen" element={<LoadingScreen />} />
            <Route path="video" element={<VideoScreen />} />
            <Route path="ar" element={<ArScreen />} />
            {/* <Route path="video" element={<LoadingScreen />} /> */}
            {/* <ArtefactScreenOverview artefactData={artefactData} /> */}
            {/* <ArtefactScreen artefactData={artefactData} /> */}
            <Route path="arMode" element={<ArMode />} />
          </Routes>
        )}
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
