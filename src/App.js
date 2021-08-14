import React from "react";
import "./App.css";
import "./Style.css";
import imageInSrc from "./imageInSrc.jpg";
import MyVideo from "./MyVideo.mp4";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Wathek Ghenimi</h1>
      <br />
      <img src={imageInSrc} alt="imageInSrc" width="200px" height="200px" />
      <br />
      <img
        src="/imageInPublic.jpg"
        alt="imageInSrc"
        width="200px"
        height="200px"
      />
      <div>
        <video width="320" height="240" controls>
          <source src={MyVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
