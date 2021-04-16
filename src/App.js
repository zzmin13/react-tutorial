import React from "react";
import Hello from "./Hello";
import "./App.css";

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      {/* 어쩌고 저쩌고 */}
      <Hello 
      // 이 내용은 보이지 않습니다.
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
