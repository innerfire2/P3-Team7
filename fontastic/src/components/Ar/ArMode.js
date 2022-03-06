/* eslint-disable no-console */

import styles from "./ArMode.module.css";

import { useState, useEffect } from "react";

export default function ArMode() {
  const [functionState, setFunctionState] = useState("size");

  const colors = ["black", "green", "blue", "purple", "red"];
  const fonts = ["Times New Roman", "Verdana", "Helvetica", "Georgia"];
  const sizes = ["10 10 10", "20 20 20", "30 30 30", "40 40 40", "50 50 50"];

  var colorCounter = 0;
  var fontCounter = 0;
  var sizeCounter = 0;

  function screenClicked() {
    document.querySelector("#plane").setAttribute("material", "fps: 10");

    if (functionState === "color") {
      if (colorCounter <= colors.length - 2) {
        colorCounter++;
      } else {
        colorCounter = 0;
      }

      document
        .querySelector("#planeHTML")
        .setAttribute("style", `color: ${colors[colorCounter]}`);
    }

    if (functionState === "font") {
      if (fontCounter <= fonts.length - 2) {
        fontCounter++;
      } else {
        fontCounter = 0;
      }

      document
        .querySelector("#planeHTML")
        .setAttribute("style", `font-family: ${fonts[fontCounter]}`);
    }

    if (functionState === "size") {
      if (sizeCounter <= sizes.length - 2) {
        sizeCounter++;
      } else {
        sizeCounter = 0;
      }

      document
        .querySelector("#planeHTML")
        .setAttribute("scale", `${sizes[sizeCounter]}`);
    }
  }

  function buttonClicked() {
    alert("Hi there!");
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
      document.querySelector("#plane").setAttribute("material", "fps: 0");

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
