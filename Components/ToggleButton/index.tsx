import { useContext } from 'react'
import { ToggleContext } from '../../utilities/ToggleContext'

import styles from './ToggleButton.module.scss'

const ToggleButton = () => {
    const { playClick, setPlayClick } = useContext(ToggleContext)

    const toggleClick = () => {
        setPlayClick(!playClick)
    }

    return (
        <div className={styles.contents}>
            <label htmlFor="sound-check">Sound:</label>
            <input
                id="sound-check"
                className={styles.toggle}
                onClick={toggleClick}
                type="checkbox"
                defaultChecked
            />
        </div>
    )
}

export default ToggleButton
