import styles from './Button.module.scss'
import { useCallback, useState } from 'react'
import math from 'mathjs'

interface ButtonProps {
    input: any
    width: number
    changeOutput: (value: any) => void
}

const Button = ({ input, width, changeOutput }: ButtonProps) => {
    const getValue = (event: any) => {
        // event.preventDefault()
        const { textContent } = event.target
        if (textContent === '=') {
        } else if (textContent === 'x') {
            return changeOutput('*')
        } else {
            return changeOutput(textContent)
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
