import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [close, setclose] = useState(false);

  return (
    <>
      <div className={close ? "mainx" : "nothing"}>
        <button onClick={(e) => setclose(!close)}></button>
      </div>
    </>
  );
}

export default App;
