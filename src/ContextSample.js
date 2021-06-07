import React, { createContext, useContext, useState } from "react";

const MyContext = createContext("default value");

const Child = () => {
  const text = useContext(MyContext);
  return <div>안녕하세요? {text}</div>;
};

const Parent = () => {
  return <Child />;
};

const GrandParent = () => {
  return <Parent />;
};

const ContextSample = () => {
  const [value, setValue] = useState(true);
  const onClick = () => {
    setValue(!value);
  };
  return (
    <MyContext.Provider value={value ? "GOOD" : "BAD"}>
      <GrandParent />
      <button onClick={onClick}>CLICK</button>
    </MyContext.Provider>
  );
};

export default ContextSample;
