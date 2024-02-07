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
        clipPath: "polygon(20% 0, 100% 0, 100% 60%, 80% 100%, 0 100%, 0 40%)"
      }}
      className="uppercase px-10 py-4 bg-red-600 text-white font-bold duration-500 hover:bg-red-700">
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
