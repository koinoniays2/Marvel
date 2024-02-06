import { GiHamburgerMenu } from "react-icons/gi";
// import { motion, AnimatePresene } from "framer-motion";
import { useState } from "react";

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <div onClick={() => {setMobileOpen(true);}} className="block md:hidden px-2 text-2xl cursor-pointer">
        <GiHamburgerMenu />
      </div>
      <div className="z-50 fixed w-full left-0 top-0 bottom-0 flex h-screen bg-main-dark">

      </div>
    </div>
  )
}