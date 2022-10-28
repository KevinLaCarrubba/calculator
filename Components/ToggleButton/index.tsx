import { useState, useContext } from 'react'
import { ToggleContext } from '../../utilities/ToggleContext'

import styles from './ToggleButton.module.scss'

const ToggleButton = () => {
    const { playClick, setPlayClick } = useContext(ToggleContext)

    const toggleClick = () => {
        setPlayClick(!playClick)
    }

    return (
        <label className={styles.label}>
            <div className={styles.toggle}>
                <input
                    className={styles.toggleState}
                    type="checkbox"
                    name="check"
                    onChange={toggleClick}
                />
                <div className={styles.indicator}></div>
            </div>
            <div className={styles.labelText}>Toggle Sound</div>
        </label>
    )
}

export default ToggleButton
