import React from 'react'
import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/logo-large.png";

export default function Header() {
  return (
    <>
    {/* 헤더 */}
    <section className="w-full flex justify-center h-12 bg-main-dark">
        <div className="relative max-w-7xl w-full h-full flex text-white justify-between items-center">
            {/* 왼쪽 : 회원 정보 */}
            <div className="flex h-full items-center text-sm space-x-2 border-l border-r border-gray-700 px-4">
                <span className="inline-block bg-white w-5 h-5 rounded-full text-main-dark text-right italic font-bold pr-0.5">IN</span>
                <span>CHOI</span>
            </div>
            {/* 중앙 : 로고 */}
            <div className="absolute h-full top-0 left-1/2 -translate-x-1/2" >
                <img className="h-full" src={LogoLarge} alt="logo_large" />
            </div>
            {/* 오른쪽 : 검색 */}
            <div className="flex items-center h-full px-4 border-l border-r border-gray-700 space-x-4">
                {/* subscribe */}
                <div className="h-full flex items-center space-x-2">
                    {/* 왼쪽 이미지 */}
                    <img className="h-[50%]" src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png" alt="이미지" />
                    <div className="text-center">
                        <p className="text-sm">MARVEL UNLIMITED</p>
                        <p className="text-xs">SUBSCRIBE</p>
                    </div>
                </div>
                {/* 아이콘 */}
                <div className="h-full flex items-center border-l pl-4 border-gray-700"><FaSearch /></div>
            </div>
        </div>
    </section>
    <section className="w-full h-10 border border-gray-700 flex justify-center items-center bg-main-dark text-white space-x-8 text-sm">
        <p>NEWS</p>
        <p>COMICS</p> 
        <p>CHARACTERS</p>
        <p>MOVIES</p>
        <p>TV SHOW</p>
        <p>GAMES</p>
        <p>VIDEOS</p>
        <p>MORE</p>
    </section>
    </>
  )
}
