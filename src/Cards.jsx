import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

Cards.propTypes = {};

function Cards({ handleHire }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  //   console.log(cards.length);
  return (
    <div className=" mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card) => (
          <Card key={card.id} handleHire={handleHire} card={card}></Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
