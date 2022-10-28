import { useContext } from 'react'
import click from '../../assets/sound/click.mp3'
import useSound from 'use-sound'
import styles from './Button.module.scss'
import { ToggleContext } from '../../utilities/ToggleContext'
interface ButtonProps {
    input: any
    width: number
    changeOutput: (value: any) => void
}

const Button = ({ input, width, changeOutput }: ButtonProps) => {
    const [playSound] = useSound(click, { volume: 0.65 })
    const { playClick } = useContext(ToggleContext)
    const getValue = (event: any) => {
        const { textContent } = event.target
        event.preventDefault()
        if (playClick) playSound()
        if (textContent === 'x') return changeOutput('*')
        return changeOutput(textContent)
    }

    return (
        <button
            className={styles.contents}
            style={{ width: `${width}rem`, height: '6rem' }}
            title={input}
            onClick={getValue}>
            <span className={styles.number}>{input}</span>
        </button>
    )
}

export default Button
