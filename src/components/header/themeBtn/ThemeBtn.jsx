import styles from "./theme.module.scss"
import sun from "../../../images/sun.png"
import moon from "../../../images/moon.png"

const ThemeBtn = ({setThemeToggle, themeToggle}) => {
    const handleThemeChange = () => {
        setThemeToggle(!themeToggle)
    }
    return(
        <div className={styles.themeButtonWrapper}>
            <button onClick={handleThemeChange} className={styles.themeButton}>
                <div className={styles.themeButtonContent}>
                    <div
                        className={
                            themeToggle
                                ? `${styles.themeButtonToggleDark} ${styles.themeButtonToggleWhite}`
                                : styles.themeButtonToggleDark
                        }
                    ></div>
                    <div>
                        <img src={sun} width={20} height={20} alt="sun" />
                    </div>
                    <div>
                        <img src={moon} width={15} height={15} alt="moon" />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default ThemeBtn;