import { Link } from "react-router-dom";

export default function NavLink({children, href, component, menuOpen, setMenuOpen, setMenuContent}) {
  return (
    <div className="group">
        <Link to={href} className="relative" onMouseEnter={() => {
          setMenuOpen(true);
          setMenuContent(component); 
        }} onMouseLeave={() => setMenuOpen(false)}>
            {children}
            {/* 밑줄 origin-left(왼쪽 기준으로 커졌다작아졌다함)*/}
            <span className="absolute -bottom-2 -left-1 -right-1 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 duration-300
            origin-left"></span>
        </Link>
    </div>
  )
}