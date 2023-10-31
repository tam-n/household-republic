import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useScrollDirection from "../useDirection"
import logo from '../Images/logo.svg'

export default function Header() {
    const scrollDirection = useScrollDirection();

    return (
        <header className={`flex items-center md:justify-around p-4 border-solid border-b-2 sticky bg-white h-24 z-50 ${scrollDirection === "down" ? "-top-24": "top-0"} transition-all duration-500`}>
            <div className="header-menu md:hidden"><FontAwesomeIcon icon={faBars} size='2xl'/></div>
            <h1 className="header-logo md:basis-1/2 mx-auto">
                <a href='/'>
                    <img src={logo} className="h-16 md:h-20"></img>
                </a>
            </h1>
            <nav className="hidden md:flex md:basis-1/4 justify-center">
                <ul className="md:flex">
                    <li className="mx-2 text-xl"><a href='products'>Products</a></li>
                    <li className="mx-2 text-xl"><a href='contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}