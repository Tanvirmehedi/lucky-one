import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Roboshop = () => {
  const [products, setProducts] = useState([]);

  //   cart for handel single product
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("roboDb.json").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);

  //   Shareable Function for data share
  const clickHandler = (product) => {
    let oneCart = [];
    if (carts.length !== 4) {
      const inCart = carts.find((item) => item.id === product.id);
      if (inCart) {
        alert("The Item are Already in cart");
      } else {
        const newCart = [product, ...carts];
        oneCart = newCart;
        setCarts(oneCart);
      }
    } else {
      alert("Not More Then 4");
    }
  };

  //   Clear Cart Components By Clicking Clear All Button
  const clearHandler = () => setCarts([]);

  //   Delete Single item from cart component
  const handelDelete = (id) => {
    const result = carts.filter((item) => item.id !== id);
    setCarts(result);
  };

  return (
    <>
      <div className="sm:px-14 py-4 bg-orange-100  sm:grid sm:grid-cols-5">
        <div className="sticky top-0 z-50 sm:col-span-1 bg-slate-100 sm:order-last mt-3 py-4">
          <div className="sticky top-0 z-50">
            <h1 className="text-xl font-bold Font_ZQH">
              Cart item : {carts.length}
            </h1>
            {carts.map((cart) => (
              <Cart cart={cart} key={cart.id} handelDelete={handelDelete} />
            ))}
            {carts.length !== 0 && <Button clearHandler={clearHandler} />}
          </div>
        </div>

        <div className="sm:col-span-4 bg-orange-100 pb-3">
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <Product
                product={product}
                clickHandler={clickHandler}
                key={product.id}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roboshop;
