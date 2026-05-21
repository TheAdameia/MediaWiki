import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { GetAllMedia } from "../managers/mediaManager";
import type { Media } from "../components/types/media";

type AppProviderProps = {
    children: ReactNode
}

type AppContextType = {
    username: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
    allMedia: Media[] | undefined
}

const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: AppProviderProps) => {
    const [username, setUsername] = useState("")
    const [allMedia, setAllMedia] = useState()

    const getAndSetAllMedia = () => {
        GetAllMedia().then(setAllMedia)
    }

    useEffect(() => {
        getAndSetAllMedia()
    }, [])

    return (
        <AppContext.Provider value={{
            username,
            setUsername,
            allMedia
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