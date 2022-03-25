import React from "react";

const Button = ({ clearHandler }) => {
  return (
    <div>
      <div className="flex justify-around items-center">
        <button className="bg-slate-800 px-3 py-1 rounded Font_ZQH text-orange-300">
          Select one For Me
        </button>
        <button
          onClick={() => clearHandler()}
          className="bg-slate-800 px-3 py-1 rounded Font_ZQH text-orange-300"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Button;
