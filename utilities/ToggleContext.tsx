import { createContext, useState } from 'react'

interface AppContextInterface {
    playClick: boolean
    setPlayClick: Function
}

interface Props {
    children: JSX.Element
}

export const ToggleContext = createContext<AppContextInterface>({
    playClick: true,
    setPlayClick: () => null
})

const ToggleProvidver = ({ children }: Props) => {
    const [playClick, setPlayClick] = useState<boolean>(true)
    const contextValues: AppContextInterface = { playClick, setPlayClick }

    return (
        <ToggleContext.Provider value={contextValues}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleProvidver
