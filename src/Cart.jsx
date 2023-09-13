import React from "react";
import PropTypes from "prop-types";

Cart.propTypes = {};

function Cart() {
  return (
    <div className="space-y-5 border solid md:w-1/5 h-96 border-gray-500 rounded-xl p-4 bg-slate-200 ">
      <h1 className="bg-gray-500 text-slate-100 rounded-xl text-center text-2xl font-bold">
        Added Cast
      </h1>
      <div className="space-y-8">
        <p className="text-gray-700 bg-white rounded-xl  px-4 py-2 text-xl font-bold">
          Total
        </p>
        <p className="text-gray-700 bg-white rounded-xl  px-4 py-2 text-xl font-bold">
          Remaining
        </p>
        <p className="text-gray-700 bg-white rounded-xl  px-4 py-2 text-xl font-bold">
          Budget:
        </p>
      </div>
    </div>
  );
}

export default Cart;
