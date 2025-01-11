import { useState } from "react";
import "./css/App.scss";
import Calc from "./calc";
import Note from "./note";
import Draw from "./draw";
import Img from "./img";
import TodoApp from "./tasks";
import Split from "react-split";

function App() {
  const [count, setCount] = useState(0);
  let [path, setPath] = useState("main");
  function els(path) {
    if (path == "main") {
      return (
        <Split
          className="con"
          sizes={[20, 35, 45]}
          minSize={250}
          maxSize={1000}
          expandToMin={true}
          gutterSize={6}
          direction="horizontal"
          cursor="col-resize"
        >
          <Split direction="vertical" expandToMin={true} minSize={250}>
            <Calc />
            <TodoApp />
          </Split>
          <Draw />
          <Note />
        </Split>
      );
    } else if (path == "note") {
      return (
        <Split
          className="con"
          sizes={[20, 80]}
          minSize={250}
          gutterSize={6}
          direction="horizontal"
          cursor="col-resize"
        >
          <Split direction="vertical" expandToMin={true} minSize={250}>
            <Calc />
            <TodoApp />
          </Split>
          <Note />
        </Split>
      );
    } else if (path == "draw") {
      return (
        <Split
          className="con"
          sizes={[20, 80]}
          minSize={250}
          gutterSize={6}
          direction="horizontal"
          cursor="col-resize"
        >
          <Split direction="vertical" expandToMin={true} minSize={250}>
            <Calc />
            <TodoApp />
          </Split>
          <Draw />
        </Split>
      );
    } else if (path == "img") {
      return (
        <div className="con">
          <Img />
        </div>
      );
    }
  }
  return (
    <div className="mainer">
      <nav>
        <div className="tabs">
          <button onClick={() => setPath("main")}>main</button>
          <button onClick={() => setPath("note")}>note</button>
          <button onClick={() => setPath("draw")}>draw</button>
          <button onClick={() => setPath("img")}>img</button>
        </div>
      </nav>
      {els(path)}
    </div>
  );
}

export default App;
