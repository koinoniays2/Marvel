import React from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";

export default function Button({link, text, onClick, isFetching}) {
  return (
    <Link to={link}>
    <div>
      <button
      disabled={isFetching}
      onClick={onClick}
      style={{
        clipPath: "polygon(10% 0, 100% 0, 100% 65%, 90% 100%, 0 100%, 0 35%)"
      }}
      className="uppercase px-6 py-3 text-white font-bold duration-500 bg-red-600 hover:bg-red-700">
      {isFetching ? (
        <div>
          <BounceLoader color="white" />
        </div>
      ) : (
        text
      )}  
      </button>
    </div>
    </Link>
  );
}
