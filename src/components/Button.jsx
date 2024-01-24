import React from "react";
import { Link } from "react-router-dom";

export default function Button({link, text}) {
  return (
    <Link to={link}>
    <div>
      <button
      style={{
        clipPath: "polygon(20% 0, 100% 0, 100% 60%, 80% 100%, 0 100%, 0 40%)"
      }}
      className="uppercase px-10 py-4 bg-red-600 text-white font-bold duration-500 hover:bg-red-700">
        {text}</button>
    </div>
    </Link>
  );
}
