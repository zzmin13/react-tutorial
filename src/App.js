import React from "react";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

const App = (props) => {
  return (
    <>
      <Counter number={0} />
      <hr />
      <Todos />
    </>
  );
};

export default App;
