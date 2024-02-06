import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/logo-large.png";
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import { AnimatePresence, motion } from "framer-motion"
import ComicsComponent from './menus/ComicsComponent';
import CharactersComponent from './menus/CharactersComponent';

// 메뉴 호버
const MENUS = [
    {
        text: "news",
        href: "#",
        component: ""
    },
    {
        text: "comics",
        href: "/comics",
        component: ComicsComponent
    },
    {
        text: "characters",
        href: "/characters",
        component: CharactersComponent
    },
    {
        text: "movies",
        href: "/movies",
        component: ""
    },
    {
        text: "TV show",
        href: "/tv",
        component: ""
    },
    {
        text: "games",
        href: "/games",
        component: ""
    },
    {
        text: "videos",
        href: "/videos",
        component: ""
    },
    {
        text: "more",
        href: "/more",
        component: ""
    },
]
export default function Header() {
    // 메뉴 호버상태 state
    const [menuOpen, setMenuOpen] = useState(false);
    // 호버했을 때 실어주기
    const [menuContent, setMenuContent] = useState();
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
                <Link to="/"><img className="h-full" src={LogoLarge} alt="logo_large" /></Link>
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
    <div className="relative">
        <section className=" w-full uppercase h-10 border border-gray-700 flex justify-center items-center bg-main-dark text-white space-x-8 text-sm">
            {MENUS.map((item, index) => (
                <NavLink key={index} href={item.href} component={item.component} menuOpen={menuOpen} setMenuOpen={setMenuOpen}
                setMenuContent={setMenuContent} style={{ pointerEvents: "none" }}>
                    {item.text}
                </NavLink>
            ))}    
        </section>
        {
            menuOpen && menuContent && (
                <AnimatePresence>
                    <motion.div
                    // 메뉴에 마우스 올렸을때 안사라지게 하기위해
                    onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}
                    initial={{ opcity:0, y: -5}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:-5}} // exit를 넣으려면 <AnimatePresence>
                    transition={{duration: 0.3, ease: "easeOut"}}
                    className="w-full absolute top-10 left-0 right-0 bg-white z-30">
                        {/* 메뉴에 마우스 올렸을때 안사라지게 하기위해 만든 투명 div */}
                        <div className="absolute -top-3 left-0 w-full h-10 bg-transparent" />
                        {menuContent}
                    </motion.div>
                </AnimatePresence>
            )
        }
    </div>
    </>
  )
}