import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useScrollDirection from "../useDirection"
import logo from '../Images/logo.svg'

export default function Header() {
    const scrollDirection = useScrollDirection();

    return (
        <header className={`flex items-center justify-center p-4 border-solid border-b-2 sticky bg-white h-24 z-50 ${scrollDirection === "down" ? "-top-24": "top-0"} transition-all duration-500`}>
            <div className="basis-1/4 header-menu md:hidden"><FontAwesomeIcon icon={faBars} size='2xl'/></div>
            <h1 className="basis-2/4 header-logo flex justify-center md:basis-1/3">
                <a href='/'>
                    <img src={logo} className="h-16"></img>
                </a>
            </h1>
            <nav className="hidden md:flex md:basis-1/3">
                <ul className="md:flex">
                    <li className="mx-2"><a href='products'>Shop</a></li>
                    <li className="mx-2"><a>About</a></li>
                    <li className="mx-2"><a>Contact</a></li>
                </ul>
            </nav>
            <div className="basis-1/4 header-icons flex justify-end md:basis-1/3">
                <FontAwesomeIcon icon={faUser} size="lg" className="basis-1/2 md:basis-1/4"/>
                <FontAwesomeIcon icon={faCartShopping} size="lg" className="basis-1/2 md:basis-1/4"/>
            </div>
        </header>
    )
}