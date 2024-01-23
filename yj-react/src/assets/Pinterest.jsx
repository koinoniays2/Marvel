import React from 'react'
import { Link } from 'react-router-dom'
import { FaPinterest } from "react-icons/fa";

export default function Pinterest() {
  return (
    <Link to="https://www.pinterest.co.kr/marvelofficial/">
        <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
            <FaPinterest size="full" />
        </div>
    </Link>
  )
}
