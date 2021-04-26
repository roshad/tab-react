import React, { useState } from "react";

import "./App.css";

function App() {
  const [state, setState] = useState({
      tabs: ["tab1", "tab2", "tab3"],
      selected: "tab1"
    }),
    handleClick = (tab) => {
      setState({ ...state, selected: tab });
    };

  return (
    <div>
      {state.tabs.map((tab) => (
        <div onClick={() => handleClick(tab)} key={tab}>
          {tab}
        </div>
      ))}
      <div>{state.selected}</div>
      {/* state.selected换成com，在com里面判断，就做成tab了 */}
    </div>
  );
}

export default App;
