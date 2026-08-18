import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./LandingPage"
import { CreateMedia } from "./create/CreateMedia"
import { CreateThing } from "./create/CreateThing"
import { CreateCitation } from "./create/CreateCitation"
import { MediaList } from "./media/MediaList"
import { ThingList } from "./things/ThingList"
import { MediaPage } from "./media/MediaPage"
import { ThingPage } from "./things/ThingPage"
import { PrimaryTypeDefinitions } from "./dictionary/PrimaryTypeDefinitions"
import { MediaToggle } from "./toggles/MediaToggle"


export const ApplicationViews = () => {

    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={
                        <LandingPage/>
                    }
                />
            </Route>
            <Route path="citation">
                <Route path="create" element={<CreateCitation/>} />
            </Route>
            <Route path="media">
                <Route path="list" element={<MediaList/>} />
                <Route path="create" element={<CreateMedia/>} />
                <Route path=":mediaId/:slug?" element={<MediaPage />} />
            </Route>
            <Route path="thing">
                <Route path="list" element={<ThingList/>} />
                <Route path="create" element={<CreateThing/>} />
                <Route path=":thingId/:slug?" element={<ThingPage />} />
            </Route>
            <Route path="guide">
                <Route path="primary-types" element={<PrimaryTypeDefinitions />} />
            </Route>
            <Route path="toggles" element={<MediaToggle />}/>
        </Routes>
    )
}