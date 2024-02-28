import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../casa-high-resolution-logo-transparent.png";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const scrollToBottom = () => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        <>
            <nav className={navbar ? "navbar active" : "navbar"}>
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <div className="logo-container">
                        <img src={logo} className="logo"/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item  navbar-link">
                            <Link
                                to="/"
                                className="nav-link"
                                id="home"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;HOME&nbsp;
                            </Link>
                        </li>
                        <li className="nav-item  navbar-link">
                            <Link
                                to="/properties"
                                className="nav-link"
                                id="properties"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;PROPERTIES&nbsp;
                            </Link>
                        </li>
                        <li className="nav-item  navbar-link">
                            <Link
                                to="/about"
                                className="nav-link"
                                id="about"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;ABOUT&nbsp;
                            </Link>
                        </li>
                        <li className="nav-item  navbar-link">
                            <button
                                className="nav-link"
                                id="contact"
                                onClick={scrollToBottom}
                            >
                                &nbsp;CONTACT&nbsp;
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;