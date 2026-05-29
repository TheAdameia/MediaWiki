import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { GetAllMedia } from "../managers/mediaManager";
import type { Media } from "../components/types/media";
import { GetAllMediaTypes } from "../managers/mediaTypeController";
import type { MediaType } from "../components/types/mediaType";
import { GetAllThingTypes } from "../managers/thingTypeManager";
import type { ThingType } from "../components/types/thingType";

type AppProviderProps = {
    children: ReactNode
}

type AppContextType = {
    username: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
    allMedia: Media[] | undefined
    mediaTypes: MediaType[] | undefined
    thingTypes: ThingType[] | undefined
}

const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: AppProviderProps) => {
    const [username, setUsername] = useState("")
    const [allMedia, setAllMedia] = useState()
    const [mediaTypes, setMediaTypes] = useState()
    const [thingTypes, setThingTypes] = useState()

    const getAndSetAllMedia = () => {
        GetAllMedia().then(setAllMedia)
    }

    const getAndSetMediatypes = () => {
        GetAllMediaTypes().then(setMediaTypes)
    }

    const getAndSetThingTypes = () => {
        GetAllThingTypes().then(setThingTypes)
    }

    useEffect(() => {
        getAndSetAllMedia()
    }, [])

    useEffect(() => {
        getAndSetMediatypes()
    }, [])

    useEffect(() => {
        getAndSetThingTypes()
    }, [])

    return (
        <AppContext.Provider value={{
            username,
            setUsername,
            allMedia,
            mediaTypes,
            thingTypes
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