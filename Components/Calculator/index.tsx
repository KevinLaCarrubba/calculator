import { useState, useCallback } from 'react'
import styles from './Calculator.module.scss'
import Button from '../Button'

const Calculator = () => {
    const [input, setInput] = useState(0)
    const [output, setOutput] = useState(0)
    const [operator, setOperator] = useState('')

    return (
        <div className={styles.contents}>
            <div className={styles.screenBox}>
                <div className={styles.view}>
                    <div className={styles.output}>
                        {output !== 0 && output}
                    </div>
                    <div className={styles.input}>{input}</div>
                </div>
            </div>
            <div className={styles.buttonRow}>
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={'AC'}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={'+/-'}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={'/'}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={'%'}
                    width={6}
                />
            </div>
            <div className={styles.buttonRow}>
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={7}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={8}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={9}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={'X'}
                    width={6}
                />
            </div>
            <div className={styles.buttonRow}>
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={4}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={5}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={6}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={'-'}
                    width={6}
                />
            </div>
            <div className={styles.buttonRow}>
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={1}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={2}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={3}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={'+'}
                    width={6}
                />
            </div>
            <div className={styles.buttonRow}>
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={0}
                    width={12}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={'.'}
                    width={6}
                />
                <Button
                    setInput={setInput}
                    setOperator={setOperator}
                    input={'='}
                    width={6}
                />
            </div>
        </div>
    )
}

export default Calculator
