import React from 'react'
import Disney from '../assets/png/disney.png'

export default function NoticeDisney() {
  return (
    <div className="w-full h-40px bg-main-dark flex justify-center items-center uppercase text-gray-300 text-xs space-x-2">
        <span>stream echo on</span>
        <img className="w-[57px] h-[40px]" src={Disney} alt="disney_image" />
    </div>
  )
}
