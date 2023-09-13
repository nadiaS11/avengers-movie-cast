import { useState } from "react";

import "./App.css";
import Cards from "./Cards";
import Cart from "./Cart";

function App() {
  const [actor, setActor] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [total, setTotal] = useState(0);
  const handleHire = (card) => {
    let cost = card.salary;
    const ifExists = actor.find((act) => act.id === card.id);
    if (!ifExists) {
      actor.forEach((act) => (cost += act.salary));
      if (cost < 20000) {
        setTotal(cost);
        const newRemaining = 20000 - cost;
        setRemaining(newRemaining);
      } else {
        alert("You don't have enough money to cast this actor.");
      }

      setActor([...actor, card]);
    } else {
      alert("Already booked");
    }
    console.log(total);
  };
  return (
    <>
      <div className=" container mx-auto">
        <h1 className="font-bold my-10 text-5xl text-center">
          Avengers: The Heros!!
        </h1>
        <div className="mx-auto flex flex-col md:flex-row gap-5 lg:gap-0 my-14 py-4 justify-between">
          <Cards handleHire={handleHire}></Cards>
          <Cart actor={actor} total={total} remaining={remaining}></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
