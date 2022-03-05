import styles from "./ArMode.module.css";

import { useEffect } from "react";

export default function ArMode() {
  // const colors = [
  //   `${styles.color1}`,
  //   `${styles.color2}`,
  //   `${styles.color3}`,
  //   `${styles.color4}`,
  //   `${styles.color5}`,
  // ];

  const colors = ["black", "green", "blue", "purple", "red"];

  var counter = 0;

  function screenClicked() {
    if (counter <= colors.length - 2) {
      counter++;
    } else {
      counter = 0;
    }
    // document.querySelector("#planeHTML").classList.add(colors[counter]);
    // document.querySelector("#planeHTML").classList.remove(colors[counter - 1]);

    document
      .querySelector("#planeHTML")
      .setAttribute("style", `color: ${colors[counter]}`);

    document.querySelector("#plane").setAttribute("material", "fps: 10");
    document.querySelector("#plane").setAttribute("material", "fps: 0");
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
