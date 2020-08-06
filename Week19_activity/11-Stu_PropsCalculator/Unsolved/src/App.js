import React from "react";
import Calculator from "./components/Calculator";

const operators = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/"
}

function App() {
  return <Calculator num1="a" operator={operators} num2="b" ></Calculator>;
}

export default App;
