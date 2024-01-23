import React from 'react'
import { FaSnapchatGhost } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Snapchat() {
  return (
    <Link to="https://www.snapchat.com/">
        <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
            <FaSnapchatGhost size="full" />
        </div>
    </Link>
  )
}
