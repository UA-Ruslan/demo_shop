import React, {useState} from "react";
import styles from "./header.module.scss"
import ThemeBtn from "./themeBtn/ThemeBtn";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import CartImgLink from "./cartImgLink/CartImgLink";
import BurgerBtn from "../dropdownMenu/burgerBtn/BurgerBtn";
// import {useToggle} from "../../hooks/useToggle";
import DropdownMenu from "../dropdownMenu/menu/DropdownMenu";

const Header = ({setThemeToggle, themeToggle, cart, screenOrientation}) => {

    const [isBurgerActive, setBurgerActive] = useState(false)

    return (
        <header className={styles.headerWrapper}>
            <Logo/>
            <div className={styles.navWrapper}>
                <Navbar themeToggle={themeToggle}/>
            </div>
            <div className={styles.cartThemeBtnWrapper}>
                <ThemeBtn setThemeToggle={setThemeToggle} themeToggle={themeToggle}/>
                <CartImgLink cart={cart} themeToggle={themeToggle}/>
            </div>

            <BurgerBtn
                setBurgerActive={setBurgerActive}
                isBurgerActive={isBurgerActive}
            />
            <DropdownMenu
                screenOrientation={screenOrientation}
                setBurgerActive={setBurgerActive}
                isBurgerActive={isBurgerActive}
                setThemeToggle={setThemeToggle}
                themeToggle={themeToggle}
                cart={cart}
            />
        </header>
    )
}

export default Header;