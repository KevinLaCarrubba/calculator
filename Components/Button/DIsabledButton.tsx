import styles from './Button.module.scss'

interface ButtonProps {
    input: any
    width: number
}

const DisabledButton = ({ input, width }: ButtonProps) => {
    return (
        <button
            className={styles.contents}
            style={{ width: `${width}rem`, height: '6rem' }}
            title={input}
            disabled>
            <span className={styles.number}>{input}</span>
        </button>
    )
}

export default DisabledButton
