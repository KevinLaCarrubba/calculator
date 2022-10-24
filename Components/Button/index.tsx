import styles from './Button.module.scss'

interface ButtonProps {
    input: any
    width: number
    setInput: (value: number) => void
    setOperator: (value: string) => void
}

const Button = ({ input, width, setInput, setOperator }: ButtonProps) => {
    const getValue = (data: any) => {
        const { textContent } = data.target
        if (/^[0-9]*$/.test(textContent)) {
            setInput(parseInt(textContent))
        } else {
            setOperator(textContent)
        }
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
