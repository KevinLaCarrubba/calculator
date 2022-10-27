import styles from './Button.module.scss'
import audio from '../../assets/buttonClick.mp3'
interface ButtonProps {
    input: any
    width: number
    changeOutput: (value: any) => void
}

const Button = ({ input, width, changeOutput }: ButtonProps) => {
    const playAudio = () => {
        new Audio(audio).play()
    }
    const getValue = (event: any) => {
        const { textContent } = event.target
        event.preventDefault()
        playAudio()
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
