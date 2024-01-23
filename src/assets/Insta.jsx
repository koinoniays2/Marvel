import React from "react";
import { ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Insta() {
  return (
    <Link to="https://www.instagram.com/marvel/">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <ImInstagram size="full" />
      </div>
    </Link>
  );
}
