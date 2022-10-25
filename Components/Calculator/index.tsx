import { useState, useCallback, useEffect } from 'react'
import styles from './Calculator.module.scss'
import Button from '../Button'

const Calculator = () => {
    const [expression, setExpression] = useState('')
    const changeOutput = (textContent: any) => {
        setExpression(expression.concat(textContent))
    }
    return (
        <div className={styles.contents}>
            <div className={styles.screenBox}>
                <div className={styles.view}>
                    <div className={styles.input}>{expression}</div>
                </div>
            </div>
            <div className={styles.buttonRow}>
                <Button changeOutput={changeOutput} input={'AC'} width={6} />
                <Button changeOutput={changeOutput} input={'<-'} width={6} />
                <Button changeOutput={changeOutput} input={'/'} width={6} />
                <Button changeOutput={changeOutput} input={'%'} width={6} />
            </div>
            <div className={styles.buttonRow}>
                <Button changeOutput={changeOutput} input={7} width={6} />
                <Button changeOutput={changeOutput} input={8} width={6} />
                <Button changeOutput={changeOutput} input={9} width={6} />
                <Button changeOutput={changeOutput} input={'x'} width={6} />
            </div>
            <div className={styles.buttonRow}>
                <Button changeOutput={changeOutput} input={4} width={6} />
                <Button changeOutput={changeOutput} input={5} width={6} />
                <Button changeOutput={changeOutput} input={6} width={6} />
                <Button changeOutput={changeOutput} input={'-'} width={6} />
            </div>
            <div className={styles.buttonRow}>
                <Button changeOutput={changeOutput} input={1} width={6} />
                <Button changeOutput={changeOutput} input={2} width={6} />
                <Button changeOutput={changeOutput} input={3} width={6} />
                <Button changeOutput={changeOutput} input={'+'} width={6} />
            </div>
            <div className={styles.buttonRow}>
                <Button changeOutput={changeOutput} input={0} width={12} />
                <Button changeOutput={changeOutput} input={'.'} width={6} />
                <Button changeOutput={changeOutput} input={'='} width={6} />
            </div>
        </div>
    )
}

export default Calculator
