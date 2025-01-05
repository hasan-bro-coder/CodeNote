import { Excalidraw,exportToBlob } from "@excalidraw/excalidraw/dist/excalidraw.development.js";
// import "@excalidraw/excalidraw/dist/excalidraw.min.css";
// import "@excalidraw/excalidraw/dist/index.css";
import { useState } from "react";
import "./css/draw.css";
function Draw() {
  // window.EXCALIDRAW_ASSET_PATH = "./node_modules/@excalidraw/excalidraw/dist/excalidraw-assets"
  //   console.info(convertToExcalidrawElements([{
  //     type: "rectangle",
  //     id: "rect-1",
  //     width: 186.47265625,
  //     height: 141.9765625,
  //   },]));
  // const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  
  // const onChange = (elements, appState) => {
  //   const data = { elements, appState };
  //   localStorage.setItem("excalidraw", JSON.stringify(data));
  // };


  // const initialData = JSON.parse(localStorage.getItem("excalidraw")) || {};

  return (
    <>
      <div style={{ height: "100vh", width: "500px" }}>
        <Excalidraw
          // initialData={initialData}
          // excalidrawAPI={(api) => setExcalidrawAPI(api)}
          // onChange={onChange}
          theme="dark"
        />
      </div>
    </>
  );
}
export default Draw;
