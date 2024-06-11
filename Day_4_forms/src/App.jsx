import { useEffect, useState } from "react";
import "./App.css";
import Welcome from "./components/Title";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";




function App() {
  const [togle, setTogle] = useState(false);


  //console.log(togle, "====togle");

  return (
    <>
       {/* {togle &&  <Welcome />} */}

       {/* <Form1 /> */}
       <Form2/>
{/* 
      <button onClick={() => setTogle((togle) => (togle = !togle))}>
        Togle Submit
      </button> */}
    </>
  );
}

export default App;
