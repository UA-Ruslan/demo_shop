import React from "react";
import styles from './logo.module.scss'
import logo1 from "../../../images/logo1.png";
import logo2 from "../../../images/logo2.png";

const Logo = () => {
    return (
        <div className={styles.logoWrapper}>
            <img className={styles.logo1} src={logo1} height={80} alt="Logo img"/>
            <img className={styles.logo2} src={logo2} height={45} alt="Logo img"/>
        </div>
    )
}

export default Logo;