import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Searchfilter from "./Searchfilter";
import SearchFilter from "./SearchFilter";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SearchFilter />
      </div>
    </>
  );
}

export default App;
