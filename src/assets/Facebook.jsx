import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Facebook() {
  return (
    <Link to="https://www.facebook.com/Marvel/">
        <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
            <FaSquareFacebook size="full" />
        </div>
    </Link>
  )
}
