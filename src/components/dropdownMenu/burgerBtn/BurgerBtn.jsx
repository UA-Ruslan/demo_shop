import styles from './burgerBtn.module.scss'
import {useEffect, useState} from "react";

const BurgerBtn = ({isBurgerActive, setBurgerActive}) => {
    const [displayToggle, setDisplayToggle] = useState({opacity:0})

    useEffect(() => {
        setTimeout(() => {
            setDisplayToggle({opacity:1})
        },500)
    },[])

    const handleClick = () => {
        setBurgerActive(!isBurgerActive)
    }

    return(
        <button style={displayToggle} onClick={handleClick} className={styles.burgerBtnWrapper}>
            <div className={isBurgerActive ? `${styles.burgerBtnItem} ${styles.firstChildForward}` : `${styles.burgerBtnItem} ${styles.firstChildBackwards}`}></div>
            <div className={isBurgerActive ? `${styles.burgerBtnItem} ${styles.middleChildForward}` : `${styles.burgerBtnItem} ${styles.middleChildBackwards}`}></div>
            <div className={isBurgerActive ? `${styles.burgerBtnItem} ${styles.lastChildForward}` : `${styles.burgerBtnItem} ${styles.lastChildBackwards}`}></div>
        </button>
    )
}

export default BurgerBtn;