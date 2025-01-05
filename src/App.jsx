import { useState } from "react";
import "./css/App.css";
import Calc from "./calc";
import Note from "./note";
import Draw from "./draw";
import TodoApp from "./tasks";
import Split from "react-split";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Split
        className="con"
        sizes={[20, 35, 45]}
        minSize={250}
        maxSize={1000}
        expandToMin={true}
        gutterSize={6}
        // gutterAlign="center"
        // snapOffset={30}
        // dragInterval={1}
        // direction="horizontal"
        cursor="col-resize"
      >
        <Split direction="vertical" expandToMin={true} minSize={250}>
          <Calc />
          <TodoApp />
        </Split>
        <Draw />
        <Note />
      </Split>
    </>
  );
}

export default App;
