import React from "react";
import { Link } from "react-router-dom";
import { BsFillKeyFill } from "react-icons/bs";
const SingleCardData = ({ card }) => {
  const { name, id, price, image, short_description } = card;
  const mainColor = {
    // backgroundColor: "#001829",
    color: "#ba9e76",
  };
  return (
    <div data-aos="zoom-in-down">
      <div className="">
        <Link
          to={`/card/${id}`}
          className="flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={image}
            alt=""
          ></img>
          <div
            className="flex flex-col 
          
          justify-between p-4 leading-normal"
          >
            <h5
              style={mainColor}
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {name}
            </h5>
            <p
              style={mainColor}
              className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            >
              {short_description}
            </p>
            <h5
              style={mainColor}
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {price}
            </h5>

            <button style={mainColor} className="btn btn-ghost">
              <BsFillKeyFill className="text-xl"></BsFillKeyFill> Buy Tickets..
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleCardData;
