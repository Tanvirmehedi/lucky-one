import React from "react";

const SelectedCart = ({ select }) => {
  const { name, picture, index } = select;
  return (
    <div>
      <div className="bg-indigo-400 mx-4 rounded-sm py-4 text-lg text-orange-100 font-bold m-3 border-4">
        <h1>
          Name: {name} / Index: {index}
        </h1>
        <div>
          <img
            src={picture}
            className="p-10 w-1/2 sm:w-full mx-auto -mt-10"
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedCart;
