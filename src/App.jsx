import { useState } from "react";

import "./App.css";
import Cards from "./Cards";
import Cart from "./Cart";

function App() {
  return (
    <>
      <div className=" container mx-auto">
        <h1 className="font-bold my-10 text-5xl text-center">
          Avengers: The Heros!!
        </h1>
        <div className="mx-auto flex flex-col md:flex-row my-14 py-4 justify-between">
          <Cards></Cards>
          <Cart></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
