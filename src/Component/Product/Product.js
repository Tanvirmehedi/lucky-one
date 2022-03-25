import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import "./Product.css";
const Product = ({ product, clickHandler }) => {
  const { name, price, picture } = product;
  return (
    <div className="border mx-4 rounded-lg bg-slate-100 my-8 sm:my-3 py-4 relative">
      <img src={picture} alt={name} className="mx-auto" />
      <div className="text-box mt-5 pb-10">
        <h2 className="text-xl font-bold Font_Lobster">Name: {name}</h2>
        <p>Price: {price}</p>
      </div>
      <button
        className="bg-orange-300 absolute -bottom-2 left-0 w-full Font_ZQH py-2 rounded-b-lg flex justify-center items-center text-xl"
        onClick={() => clickHandler(product)}
      >
        Add To Cart
        <BsFillCartPlusFill className="ml-2 text-slate-100 text-2xl" />
      </button>
    </div>
  );
};

export default Product;
