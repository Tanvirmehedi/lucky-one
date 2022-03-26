import React from "react";
import { BsQuestionDiamondFill } from "react-icons/bs";

const QA = () => {
  return (
    <>
      <h1 className="py-3 text-2xl font-bold Font_ZQH flex justify-center items-center">
        Q & A <BsQuestionDiamondFill className="ml-3 text-orange-500" />
      </h1>
      <div className="container mx-auto sm:grid sm:grid-cols-3 my-3">
        <h1 className="bg-red-400">Hello</h1>
        <h1 className="bg-red-200">Gelo</h1>
        <h1 className="bg-red-500">Molo</h1>
      </div>
    </>
  );
};

export default QA;
