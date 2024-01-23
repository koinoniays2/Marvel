import React from 'react'
import { Link } from 'react-router-dom'
import { FaTumblr } from "react-icons/fa6";

export default function Tumb() {
  return (
    <Link to="https://marvelentertainment.tumblr.com/">
        <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
            <FaTumblr size="full" />
        </div>
    </Link>
  )
}
