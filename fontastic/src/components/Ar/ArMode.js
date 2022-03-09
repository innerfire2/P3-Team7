import { useEffect } from "react";

export default function ArMode({ whichFunction }) {
  const colors = ["black", "green", "blue", "purple", "red"];
  const fonts = ["Times New Roman", "Verdana", "Helvetica", "Georgia"];
  const sizes = ["10 10 10", "20 20 20", "30 30 30", "40 40 40", "50 50 50"];
  const languages = [
    "Dem lebendigen Geist",
    "To the Living Spirit",
    "посвященный живому духу",
    "à l'esprit vivant",
  ];
  const positions = [""];

 

  var colorCounter = 0;
  var fontCounter = 0;
  var sizeCounter = 0;
  var languageCounter = 0;

  function screenClicked() {
    document.querySelector("#plane").setAttribute("material", "fps: 10");

    //arElement.style.fontFamily(`${fonts[fontCounter]}`);

    if (whichFunction === "color") {
      if (colorCounter <= colors.length - 2) {
        colorCounter++;
      } else {
        colorCounter = 0;
      }

      document.querySelector(
        "#planeHTML"
      ).style.color = `${colors[colorCounter]}`;

      // document
      //   .querySelector("#planeHTML")
      //   .setAttribute("style", `color: ${colors[colorCounter]}`);
    }

    if (whichFunction === "font") {
      if (fontCounter <= fonts.length - 2) {
        fontCounter++;
      } else {
        fontCounter = 0;
      }

      document.querySelector(
        "#planeHTML"
      ).style.fontFamily = `${fonts[fontCounter]}`;

      // document
      //   .querySelector("#planeHTML")
      //   .setAttribute("style", `font-family: ${fonts[fontCounter]}`);
    }

    if (whichFunction === "size") {
      if (sizeCounter <= sizes.length - 2) {
        sizeCounter++;
      } else {
        sizeCounter = 0;
      }

      document
        .querySelector("#plane")
        .setAttribute("scale", `${sizes[sizeCounter]}`);
    }

    if (whichFunction === "language") {
      if (languageCounter <= languages.length - 2) {
        languageCounter++;
      } else {
        languageCounter = 0;
      }
      document.querySelector(
        "#arText"
      ).innerHTML = `${languages[languageCounter]}`;
    }

    if (whichFunction === "camera") {
      //document.querySelector('a-scene').components.screenshot.getCanvas('perspective');
      document
        .querySelector("a-scene")
        .components.screenshot.capture("perspective");
    }
  }

  function buttonClicked() {
    alert(whichFunction);
  }

  useEffect(() => {
    document.body.classList.add("camera-active");

    document
      .querySelector("#screenOverlay")
      .addEventListener("click", screenClicked);

    document
      .querySelector(".say-hi-button")
      .addEventListener("click", buttonClicked);

    return () => {
      document
        .querySelector("#screenOverlay")
        .removeEventListener("click", screenClicked);

      document
        .querySelector(".say-hi-button")
        .removeEventListener("click", buttonClicked);
      document.body.classList.remove("camera-active");
    };
  });

  return <></>;
}
