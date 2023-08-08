import {NavLink} from "react-router-dom";
import styles from "./navbar.module.scss";
import React from "react";

const Navbar = ({themeToggle}) => {
    return (
        <NavLink className={themeToggle
            ? `${styles.navLink} ${styles.navLinkWhiteMode}`
            : `${styles.navLink} ${styles.navLinkDarkMode}`
        } to='/'><b>STORE</b></NavLink>
    )
}

export default Navbar;