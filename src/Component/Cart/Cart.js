import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";

const Cart = ({ cart, handelDelete }) => {
  const { id, picture, name, price } = cart;
  return (
    <div className="flex bg-white justify-around items-center border mx-4 rounded-md mb-3">
      <div className="w-1/4">
        <img src={picture} className="w-1/2 pb-3 sm:pb-1" alt={name} />
      </div>
      <h1>{name}</h1>
      <p>${price}</p>
      <button onClick={() => handelDelete(id)}>
        <AiFillDelete className="text-2xl text-orange-400" />
      </button>
    </div>
  );
};

export default Cart;
