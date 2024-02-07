import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MENUS } from "./Header";
import { Link } from "react-router-dom";

// 컴포넌트
const MobileMenuLink = ({ menu, setMobileOpen }) => (
  <Link to={menu.href}>
  <div className="relative w-full flex justify-between px-4 py-3 cursor-pointer group">
    {/* 왼쪽 */}
    <div>{menu.text}</div>
    {/* 오른쪽 */}
    <div className="text-red-500 text-lg">
      <IoIosArrowForward />
    </div>
    <div className="absolute left-0 right-0 bottom-0 origin-left h-[1px] bg-neutral-600 scale-x-0 group-hover:scale-x-100 duration-300" />
  </div>
  </Link>
);

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <div
        onClick={() => {
          setMobileOpen(true);
        }}
        className="block md:hidden px-2 text-2xl cursor-pointer"
      >
        <GiHamburgerMenu />
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100vw" }}
            // state값이 들어오면 animate
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="z-50 fixed w-full left-0 top-0 bottom-0 flex h-screen bg-main-dark overflow-hidden"
          >
            <div className="w-full h-full">
              {/* 모바일 헤더영역 */}
              <div className="w-full flex justify-between px-4 py-3.5">
                <button
                  className="text-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  <IoClose />
                </button>
                <button className="text-md">
                  <FaSearch />
                </button>
              </div>
              {/* 모바일 메뉴 영역 */}
              <div>
                {MENUS.map((item, index) => (
                  <MobileMenuLink key={index} menu={item} onClick={() => setMobileOpen(false)}/>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
