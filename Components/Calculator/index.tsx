import { useState } from 'react'
import styles from './Calculator.module.scss'
import Button from '../Button'
import DisabledButton from '../Button/DIsabledButton'
import { evaluate } from 'mathjs'

const Calculator = () => {
    const [expression, setExpression] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const regexTest = new RegExp(
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~][`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    )
    const changeOutput = (textContent: any) => {
        switch (textContent) {
            case 'AC':
                setExpression('')
                setError(false)
                break
            case '←':
                setExpression(expression.slice(0, -1))
                break
            case 'x':
                setExpression(expression.concat('*'))
                break
            case '=':
                console.log(regexTest.test(expression))
                if (regexTest.test(expression)) {
                    setExpression('Invalid Output')
                    setError(true)
                } else {
                    setExpression(evaluate(expression).toString())
                }
                break
            default:
                setExpression(expression.concat(textContent))
                break
        }
    }
    return (
        <div className={styles.contents}>
            <div className={styles.screenBox}>
                <div className={styles.view}>
                    <div className={styles.input}>{expression}</div>
                </div>
            </div>
            {error ? (
                <>
                    <div className={styles.buttonRow}>
                        <Button
                            changeOutput={changeOutput}
                            input={'AC'}
                            width={6}
                        />
                        <DisabledButton input={'←'} width={6} />
                        <DisabledButton input={'/'} width={6} />
                        <DisabledButton input={'%'} width={6} />
                    </div>
                    <div className={styles.buttonRow}>
                        <DisabledButton input={7} width={6} />
                        <DisabledButton input={8} width={6} />
                        <DisabledButton input={9} width={6} />
                        <DisabledButton input={'x'} width={6} />
                    </div>
                    <div className={styles.buttonRow}>
                        <DisabledButton input={4} width={6} />
                        <DisabledButton input={5} width={6} />
                        <DisabledButton input={6} width={6} />
                        <DisabledButton input={'-'} width={6} />
                    </div>
                    <div className={styles.buttonRow}>
                        <DisabledButton input={1} width={6} />
                        <DisabledButton input={2} width={6} />
                        <DisabledButton input={3} width={6} />
                        <DisabledButton input={'+'} width={6} />
                    </div>
                    <div className={styles.buttonRow}>
                        <DisabledButton input={0} width={12} />
                        <DisabledButton input={'.'} width={6} />
                        <DisabledButton input={'='} width={6} />
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.buttonRow}>
                        <Button
                            changeOutput={changeOutput}
                            input={'AC'}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={'←'}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={'/'}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={'%'}
                            width={6}
                        />
                    </div>
                    <div className={styles.buttonRow}>
                        <Button
                            changeOutput={changeOutput}
                            input={7}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={8}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={9}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={'x'}
                            width={6}
                        />
                    </div>
                    <div className={styles.buttonRow}>
                        <Button
                            changeOutput={changeOutput}
                            input={4}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={5}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={6}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={'-'}
                            width={6}
                        />
                    </div>
                    <div className={styles.buttonRow}>
                        <Button
                            changeOutput={changeOutput}
                            input={1}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={2}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={3}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={'+'}
                            width={6}
                        />
                    </div>
                    <div className={styles.buttonRow}>
                        <Button
                            changeOutput={changeOutput}
                            input={0}
                            width={12}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={'.'}
                            width={6}
                        />
                        <Button
                            changeOutput={changeOutput}
                            input={'='}
                            width={6}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Calculator
