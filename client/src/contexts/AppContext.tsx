import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { GetAllMedia } from "../managers/mediaManager";
import type { Media } from "../components/types/media";
import { GetAllMediaTypes } from "../managers/mediaTypeController";
import type { MediaType } from "../components/types/mediaType";
import { GetAllThingTypes } from "../managers/thingTypeManager";
import type { ThingType } from "../components/types/thingType";
import { GetAllThings } from "../managers/thingManager";
import type { Thing } from "../components/types/thing";

type AppProviderProps = {
    children: ReactNode
}

type AppContextType = {
    username: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
    allMedia: Media[] | undefined
    mediaTypes: MediaType[] | undefined
    thingTypes: ThingType[] | undefined
    allThings: Thing[] | undefined
}

const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: AppProviderProps) => {
    const [username, setUsername] = useState("")
    const [allMedia, setAllMedia] = useState()
    const [mediaTypes, setMediaTypes] = useState()
    const [thingTypes, setThingTypes] = useState()
    const [allThings, setAllThings] = useState()

    const getAndSetAllMedia = () => {
        GetAllMedia().then(setAllMedia)
    }

    const getAndSetMediaTypes = () => {
        GetAllMediaTypes().then(setMediaTypes)
    }

    const getAndSetThingTypes = () => {
        GetAllThingTypes().then(setThingTypes)
    }

    const getAndSetAllThings = () => {
        GetAllThings().then(setAllThings)
    }

    useEffect(() => {
        getAndSetAllMedia()
    }, [])

    useEffect(() => {
        getAndSetMediaTypes()
    }, [])

    useEffect(() => {
        getAndSetThingTypes()
    }, [])

    useEffect(() => {
        getAndSetAllThings()
    }, [])

    return (
        <AppContext.Provider value={{
            username,
            setUsername,
            allMedia,
            mediaTypes,
            thingTypes,
            allThings
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