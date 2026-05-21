import { createContext, useContext, useState, type ReactNode } from "react";

type AppProviderProps = {
    children: ReactNode
}

type AppContextType = {
    username: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
}

const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: AppProviderProps) => {
    const [username, setUsername] = useState("")

    return (
        <AppContext.Provider value={{
            username,
            setUsername
        }}>
        {children}
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error("useAppContext must be used within AppProvider")
    }

    return context
}