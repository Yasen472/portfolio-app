import './navbar.css';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

function Navbar() {
    const [isVisited, setIsVisited] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const docEl = document.documentElement;


    const handleIconChange = () => {
        setDarkModeEnabled(!darkModeEnabled)
    }

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    };

    const toggleVisitedState = (event: any) => {
        setIsVisited((prevState) => !prevState);

        const targetLink = event.target;
        const activeElements = Array.from(docEl.getElementsByClassName("active"));

        activeElements.forEach((activeElement) => {
            activeElement.classList.remove("active");
        })

        if (isVisited) {
            targetLink.classList.remove("active");
        } else {
            targetLink.classList.add("active")
        }

        setIsVisited((prevState) => !prevState);

    }

    return (

        <div className="navbar-container">

            <div className="nav-name-heading">
                <span>
                    YasenG
                    <span className="header-dot">.</span>
                </span>
            </div>

            <div className={`links ${menuOpened ? 'active' : ''}`}>

                <div className="nav-links-container">

                    <a href="#home-section" onClick={toggleVisitedState}>Home</a>
                    <a href="#about-section" onClick={toggleVisitedState}>About</a>
                    <a href="#projects-section" onClick={toggleVisitedState}>Projects</a>

                </div>
                

            </div>

            <div className="switch-mode-container" onClick={handleIconChange}>
                {darkModeEnabled ?
                    < IoMoonOutline /> :
                    < MdSunny />
                }
            </div>

            <div className="switch-mode-container-mobile" onClick={handleIconChange}>
                {darkModeEnabled ?
                    < IoMoonOutline /> :
                    < MdSunny />
                }
            </div>


            <div className="menu-icon" onClick={toggleMenu}>
                <IoMenu />
            </div>

        </div>
    )
}

export default Navbar;