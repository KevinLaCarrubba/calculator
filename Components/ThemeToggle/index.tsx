import { useContext } from 'react'
import { ThemeContext } from '../../utilities/ThemeContext'
import styles from './ThemeToggle.module.scss'

const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className={styles.contents}>
            <label htmlFor="theme-check">Dark Mode:</label>
            <input
                id="theme-check"
                className={styles.toggle}
                type="checkbox"
                onClick={toggleTheme}
            />
        </div>
    )
}

export default ThemeToggle
