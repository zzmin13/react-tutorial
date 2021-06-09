import React from "react";
import CounterContainer from "./containers/CounterContainer.jsx";
import TodosContainer from "./containers/TodosContainer.jsx";

const App = (props) => {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
};

export default App;
