import PropTypes from "prop-types";

Cart.propTypes = {
  actor: PropTypes.array.isRequired,
};

function Cart({ actor, total, remaining }) {
  console.log(actor, total, remaining);
  return (
    <div className="space-y-5 border solid md:w-2/5 lg:w-3/12 h-full border-gray-500 rounded-xl p-4 bg-slate-200 ">
      <h1 className="bg-gray-500 text-slate-100 rounded-xl text-center text-2xl font-bold">
        Added Cast
      </h1>
      <ul className="text-gray-700 bg-white rounded-xl min-h-[150px] px-4 py-2 text-xl font-bold">
        {actor.map((act, idx) => (
          <li key={idx}>{act.name}</li>
        ))}
      </ul>
      <div className="space-y-8">
        <p className="text-gray-700 bg-white rounded-xl  px-4 py-2 text-xl font-bold">
          Total: {total}
        </p>
        <p className="text-gray-700 bg-white rounded-xl  px-4 py-2 text-xl font-bold">
          Remaining: {remaining}
        </p>
        <p className="text-gray-700 bg-white rounded-xl  px-4 py-2 text-xl font-bold">
          Budget: $20K
        </p>
      </div>
    </div>
  );
}

export default Cart;
