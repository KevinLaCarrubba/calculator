interface Props {
    operator: string
    input: number

    output: number
}

const DoMath = ({ operator, input, output }: Props) => {
    switch (operator) {
        case '+':
            return output + input

        case '-':
            return output - input

        default:
            break
    }
    return
}

export default DoMath
