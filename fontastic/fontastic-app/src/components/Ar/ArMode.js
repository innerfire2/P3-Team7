import styles from "./ArMode.module.css";

import { useEffect } from "react";

export default function ArMode() {
  const colors = ["black", "blue", "red", "green"];

  var counter = 2;

  function screenClicked() {
    alert("screenClicked");

    document.querySelector("#arText").classList.add(`${styles.changeColor}`);
  }

  function buttonClicked() {
    alert("Hi there!");
  }

  useEffect(() => {
    document.body.classList.add("camera-active");
    document
      .querySelector(".screenOverlay")
      .addEventListener("click", screenClicked);

    document
      .querySelector(".say-hi-button")
      .addEventListener("click", buttonClicked);

    return () => {
      document
        .querySelector(".screenOverlay")
        .removeEventListener("click", screenClicked);
      document
        .querySelector(".say-hi-button")
        .removeEventListener("click", buttonClicked);
      document.body.classList.remove("camera-active");
    };
  });

  return <></>;
}
