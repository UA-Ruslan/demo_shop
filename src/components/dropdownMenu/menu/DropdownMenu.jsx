import styles from './dropdownMenu.module.scss'
import CartImgLink from "../../header/cartImgLink/CartImgLink";
import Navbar from "../../header/navbar/Navbar";
import ThemeBtn from "../../header/themeBtn/ThemeBtn";
import {useEffect} from "react";

const DropdownMenu = ({setThemeToggle, themeToggle, cart, isBurgerActive, setBurgerActive, screenOrientation}) => {
    const handleClick = () => {
        setBurgerActive(!isBurgerActive)
    }

    useEffect(() => {
        if(screenOrientation === 'landscape-primary') {
            setBurgerActive(false)
        }
    },[screenOrientation])

    return (
        <div className={
            !isBurgerActive
                ? styles.dropdownMenuUnActive
                : `${styles.dropdownMenuUnActive} ${styles.dropdownMenuActive}`
        }>
            <div onClick={handleClick}>
                <Navbar/>
            </div>
            <div onClick={handleClick}>
                <CartImgLink cart={cart} themeToggle={themeToggle}/>
            </div>
            <div onClick={handleClick}>
                <ThemeBtn setThemeToggle={setThemeToggle} themeToggle={themeToggle}/>
            </div>
        </div>
    )
}

export default DropdownMenu;