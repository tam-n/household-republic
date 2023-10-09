import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from '../Images/logo.svg'

export default function Header() {
    return (
        <header className="flex items-center justify-center align-center px-8 md:justify-start border-solid border-b-2">
            <div className="basis-1/4 header-menu md:hidden"><FontAwesomeIcon icon={faBars} size='2xl' className=""/></div>
            <h1 className="basis-full header-logo flex justify-center md:basis-1/3">
                <a href='/'>
                    <img src={logo} className='h-32'></img>
                </a>
            </h1>
            <nav className="hidden md:flex md:basis-1/3">
                <ul className="md:flex md:basis-1/3">de
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