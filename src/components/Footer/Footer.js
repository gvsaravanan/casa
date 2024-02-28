import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import ContactForm from "./ContactForm/ContactForm"

function Footer() {
    return (
        <>
            <footer className={style["footer"]}>
                <div className={style["footer2"]}>
                    <div className={style["container"]}>
                        <ContactForm/>
                        <div className={style["panel-body"]}>
                            <div className={style["navigate"]}>
                                <ul className={style["nav"]}>
                                    <li className={style["link"]}>
                                        <Link to="/" className="nav-link" id="home">
                                            HOME
                                        </Link>
                                    </li>
                                    <li className={style["link"]}>
                                        <Link to="/services" className="nav-link" id="services">
                                            SERVICES
                                        </Link>
                                    </li>
                                    <li className={style["link"]}>
                                        <Link to="/about" className="nav-link" id="about">
                                            ABOUT
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className={style["copyright"]}>
                                Copyright &copy; 2024 Casa &nbsp;|&nbsp; kavadiayash@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
