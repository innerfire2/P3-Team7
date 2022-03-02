function App() {
  const color = "blue";

  const colors = ["black", "blue", "red", "green"];

  var counter = 2;

  function counting() {
    counter = counter + 1;
    if (counter >= colors.length) {
      counter = 0;
    }
  }
  //   AFRAME.registerComponent("markerhandler", {
  //     init: function () {
  //       this.el.sceneEl.addEventListener("markerFound", () => {
  //         alert("marker found");
  //       });
  //     },
  // });

  window.onload = function () {
    document
      .querySelector(".screenOverlay")
      .addEventListener("click", function () {
        counting();
      });

    document
      .querySelector(".say-hi-button")
      .addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Hi there!");
      });
  };

  console.log(counter);

  return (
    <div>
      <div className="arjs-loader">
        <div>Loading, please wait...</div>
      </div>

      <div className="buttons">
        <button className="say-hi-button">SAY HI!</button>
      </div>

      <div className="screenOverlay"></div>

      <a-scene
        embedded
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        <a-assets>
          <a-asset-item
            id="exoFont"
            src="./fonts/exoBlack.typeface.json"
          ></a-asset-item>
        </a-assets>

        <a-nft
          markerhandler
          type="nft"
          url=".\fontastic\AR\imageDescriptors\lebendigerGeist"
          smooth="true"
          smoothCount="10"
          smoothTolerance="0.1"
          smoothThreshold="50"
        >
          <A-entity
            geometry="primitive: plane; width: 400px; height: 500px"
            position="0 5 0"
            rotation="0 0 0"
            material="color: #7BC8A4"
          />

          <a-plane
            material="shader: html; target: .lebendigerGeist; ratio: height;"
            position="20 5 -10"
            rotation="-90 0 0"
            scale="10 10 10"
          ></a-plane>
        </a-nft>
        <a-entity camera> </a-entity>
      </a-scene>

      <div className="textInput">
        <div
          id="planeHTML"
          className="lebendigerGeist"
          style={{ color: colors[counter] }}
        >
          <h1>Dem lebendigen Geist</h1>
        </div>
      </div>
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById("root"));
