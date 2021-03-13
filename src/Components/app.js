import { React, useState } from "react";
import Netflix from "./netflix";
import Prime from "./amazonPirime";

const App = () => {
  return (
    <div>
      <Netflix />
      <Prime />
    </div>
  );
};

export default App;
