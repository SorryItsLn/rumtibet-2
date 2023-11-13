import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Frame from "./components/about/Frame";
import Herp from "./components/hero/Herp";

function App() {

const [frame, setFrame] = useState(false)

  return (
    <div className="w-full h-full ">
      <main className="">
        <Herp className ="scale-[1.15]" />
        <Frame  frame={frame} setFrame= {setFrame}/>
        <About/>
      </main>
    </div>
  );
}

export default App;
