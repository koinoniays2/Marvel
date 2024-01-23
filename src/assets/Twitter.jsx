import React from 'react'
import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";

export default function Twitter() {
  return (
    <Link to="https://twitter.com/marvel">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <FaXTwitter size="full" />
      </div>
    </Link>
  )
}
