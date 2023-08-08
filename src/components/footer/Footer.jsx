import React from "react";
import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <p className={styles.description}>© 2023 by Ruslan Nikolaiets. React shop project.</p>
        </footer>
    )
}
export default Footer;