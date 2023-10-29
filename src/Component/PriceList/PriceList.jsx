import { useEffect, useState } from "react";
import "./PriceList.css";
import PriceCart from "../PriceCart/PriceCart";

const PriceList = () => {
  const [prices, setPrice] = useState([]);
  useEffect(() => {
    fetch("./price.json")
      .then((res) => res.json())
      .then((data) => setPrice(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl bg-purple-300 text-center text-purple-950 font-semibold p-4">
        Awesome Affordable Prices
      </h2>
      <div className="grid md:grid-cols-3 gap-3">
        {prices.map((price) => (
          <PriceCart price={price} key={price.id}></PriceCart>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
