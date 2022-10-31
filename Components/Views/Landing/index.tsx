import Calculator from '../../Calculator'
import ToggleButton from '../../ToggleButton'
import ThemeToggle from '../../ThemeToggle'

import styles from './Landing.module.scss'

const LandingPage = () => {
    return (
        <div>
            <div className={styles.switchContainer}>
                <ThemeToggle />
                <ToggleButton />
            </div>
            <Calculator />
        </div>
    )
}
export default LandingPage
