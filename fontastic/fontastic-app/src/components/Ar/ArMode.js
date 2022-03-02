import styles from "./ArMode.module.css";
export default function ArMode() {
  const colors = ["black", "blue", "red", "green"];

  var counter = 2;

  // function counting() {
  //   counter = counter + 1;
  //   if (counter >= colors.length) {
  //     counter = 0;
  //   }
  // }
  //   AFRAME.registerComponent("markerhandler", {
  //     init: function () {
  //       this.el.sceneEl.addEventListener("markerFound", () => {
  //         alert("marker found");
  //       });
  //     },
  // });

  // window.onload = function () {
  //   document
  //     .querySelector(".screenOverlay")
  //     .addEventListener("click", function () {
  //       counting();
  //     });

  //   document
  //     .querySelector(".say-hi-button")
  //     .addEventListener("click", function () {
  //       // here you can change also a-scene or a-entity properties, like
  //       // changing your 3D model source, size, position and so on
  //       // or you can just open links, trigger actions...
  //       alert("Hi there!");
  //     });
  // };

  console.log(counter);
  return (
    // <div className={styles.ArScreen}>
    //   <div className={styles.content}>
    //     <h1>AR Mode</h1>
    //     {/* <p>Bewege dein Handy, um das Artefakt zu erfassen</p> */}
    //     <div className={styles.iconContainer}>
    //       <IoMoveSharp />
    //       <FaFont />
    //       <IoMdColorFill />
    //       <FaCamera />
    //     </div>
    //     <Link style={{ color: "white" }} className={styles.link} to="/">
    //       zurück
    //     </Link>
    //   </div>
    // </div>

    <div>
      <div className={styles.arjsLoader}>
        <div>Loading, please wait...</div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.sayHiButton}>SAY HI!</button>
      </div>

      <div className={styles.screenOverlay}></div>

      <a-scene
        embedded
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        {/* <a-assets>
            <a-asset-item
              id="exoFont"
              src="./fonts/exoBlack.typeface.json"
            ></a-asset-item>
          </a-assets> */}

        <a-nft
          markerhandler
          type="nft"
          url="./imageDescriptors/lebendigerGeist"
          smooth="true"
          smoothCount="10"
          smoothTolerance="0.1"
          smoothThreshold="50"
        >
          {/* <a-entity
              geometry="primitive: plane; width: 400px; height: 500px"
              position="0 5 0"
              rotation="0 0 0"
              material="color: #7BC8A4"
            /> */}

          <a-plane
            material={`shader: html; target: ${styles.lebendigerGeist}; ratio: height`}
            position="20 5 -10"
            rotation="-90 0 0"
            scale="10 10 10"
          />
        </a-nft>
        <a-entity camera> </a-entity>
      </a-scene>

      <div className={styles.textInput}>
        <div
          id="planeHTML"
          className={styles.lebendigerGeist}
          style={{ color: colors[counter] }}
        >
          <h1>Dem lebendigen Geist</h1>
        </div>
      </div>
    </div>
  );
}
