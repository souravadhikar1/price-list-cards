import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl  font-extrabold text-purple-700">
          {price.price}
        </span>
        <span className="text-2xl font-bold text-white">/mon</span>
      </h2>
      <p className="text-2xl font-bold text-center my-6">{price.name}</p>
      <p className="font-bold underline text-white">Features: </p>
      {price.features.map((feature, idx) => (
        <Feature feature={feature} key={idx}></Feature>
      ))}
      <button className="bg-red-300 text-black w-full  py-3 rounded-md font-bold mt-auto hover:bg-pink-400">
        Buy now
      </button>
    </div>
  );
};

export default PriceCard;
