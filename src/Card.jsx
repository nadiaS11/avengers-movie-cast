import PropTypes from "prop-types";

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

function Card({ card, handleHire }) {
  const { name, role, image, salary } = card;
  return (
    <div className="bg-slate-200 flex flex-col space-y-5 border solid border-gray-500 rounded-xl p-4">
      <figure className="mx-auto">
        <img className=" rounded-full" src={image} alt="" />
      </figure>
      <h1 className=" text-center text-2xl font-bold"> {name} </h1>
      <div className=" text-xl font-semibold text-gray-700">
        <p>{role}</p> <p> Salary: ${salary}</p>
      </div>
      <button
        onClick={() => handleHire(card)}
        className="bg-gray-500 text-slate-100 rounded-xl text-2xl font-semibold"
      >
        Hire
      </button>
    </div>
  );
}

export default Card;
