import React from "react";
import { BsQuestionDiamondFill } from "react-icons/bs";

const QA = () => {
  return (
    <>
      <h1 className="py-3 text-2xl font-bold Font_ZQH flex justify-center items-center">
        Q & A <BsQuestionDiamondFill className="ml-3 text-orange-500" />
      </h1>
      <div className="container mx-auto sm:grid sm:grid-cols-3 my-3 gap-3">
        {/* FIRST QUESTION */}

        <div>
          <h3 className="font-semibold bg-black text-slate-50 py-2">
            How React Does Work?
          </h3>
          <p className="py-2 text-lg px-2 text-justify">
            In order to work in React, two node packages are required: React and
            React dom. When a component is written, it remains a pure JavaScript
            function. In which code written using jsx is compiled in html. React
            dom then injects the entire JavaScript code into an index.html.
            Updates data by comparing the package known as React Dom or Virtual
            Dom with the real Dom.
          </p>
        </div>

        {/* SECOND QUESTION */}
        <div className="text-justify ">
          <h3 className="font-semibold bg-slate-700 text-slate-50 py-2 text-center">
            Different between Props vs State?
          </h3>
          <p className="py-2 text-lg px-2">
            <div className="border my-1 px-2">
              <span className="text-orange-600">Props:</span>
              props immutable. This means that it cannot be changed.The props
              are usable in both functional and state components.Props are
              read-only.Props make components reusable.
            </div>
            <div className="border px-2">
              <span className="text-slate-500">State:</span>
              The state can be changed or beautifully called mutable.State is
              both read and write.state keep as simple as possible. It act for
              the component's local state or information.
            </div>
          </p>
        </div>

        {/* THIRD QUESTION */}
        <div>
          <h3 className="font-semibold bg-sky-500 text-slate-50 py-2">
            How UseState Works?
          </h3>
          <p className="py-2 text-lg px-2 text-justify">
            The US state usually return two parameters. At first it comes in an
            array, and in the direction it comes in a function.When we want to
            change something, we use this keyword to read. import the useState
            Hook from React. It lets us keep local state in a function
            component.user clicks, then call setCount with a new value. React
            will then re-render the value and display it.
          </p>
        </div>
      </div>
    </>
  );
};

export default QA;
