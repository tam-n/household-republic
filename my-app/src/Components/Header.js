import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useScrollDirection from "../useDirection"
import logo from '../Images/logo.svg'

export default function Header() {
    const scrollDirection = useScrollDirection();

    return (
        <header className={`flex items-center justify-center p-4 border-solid border-b-2 sticky w-full bg-white h-24 z-50 ${scrollDirection === "down" ? "-top-24": "top-0"} transition-all duration-500`}>
            <div className="basis-1/3 header-menu md:hidden"><FontAwesomeIcon icon={faBars} size='2xl'/></div>
            <h1 className="w-full header-logo flex justify-center md:basis-1/3">
                <a href='/' className="w-56 md:w-80">
                    <img src={logo}></img>
                </a>
            </h1>
            <nav className="hidden md:flex md:basis-1/3">
                <ul className="md:flex">
                    <li className="mx-2"><a>Shop</a></li>
                    <li className="mx-2"><a>About</a></li>
                    <li className="mx-2"><a>Contact</a></li>
                </ul>
            </nav>
            <div className="header-icons flex justify-end md:basis-1/3">
                <FontAwesomeIcon icon={faUser} size="lg" className="mx-5"/>
                <FontAwesomeIcon icon={faCartShopping} size="lg" className="mx-5"/>
            </div>
        </header>
    )
}