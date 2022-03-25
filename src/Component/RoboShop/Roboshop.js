import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Roboshop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("roboDb.json").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);
  return (
    <div className="sm:px-14 py-4 bg-orange-100  sm:grid sm:grid-cols-5">
      <div className="sm:col-span-1 bg-slate-100 sm:order-last mt-3">Cart</div>

      <div className="sm:col-span-4 bg-orange-100 pb-3">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roboshop;
