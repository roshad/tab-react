import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <div>
      <Tabs>
        <div label="Gator">tab1</div>
        <div label="Croc">tab2</div>
        <div label="Sarcosuchus">tab3</div>
      </Tabs>
    </div>
  );
}

export default App;
