import { useState } from "react";
import SingleCardData from "../../Components/SingleCardData/SingleCardData";

const AllCard = () => {
  const [cards, setCards] = useState([]);

  fetch("/apiData.json")
    .then((res) => res.json())
    .then((data) => setCards(data));

  return (
    <div>
      <h2 className="text-6xl  mb-10 mt-16  font-mono text-center">
        Our Popular Services{" "}
      </h2>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="grid lg:grid-cols-2   lg:max-w-7xl mx-auto justify-center gap-10
      
      "
      >
        {cards.map((card) => (
          <SingleCardData key={card.id} card={card}></SingleCardData>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
