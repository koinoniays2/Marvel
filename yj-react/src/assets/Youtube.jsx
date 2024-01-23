import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa6";

export default function Youtube() {
  return (
    <Link to="https://www.youtube.com/marvel">
        <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
            <FaYoutube size="full" />
        </div>
    </Link>
  )
}
