import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./LandingPage"
import { CreateMedia } from "./create/createMedia"
import { CreateThing } from "./create/CreateThing"
import { CreateCitation } from "./create/CreateCitation"


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
            <Route path="create">
                <Route path="media" element={<CreateMedia/>} />
                <Route path="thing" element={<CreateThing/>} />
                <Route path="citation" element={<CreateCitation/>} />
            </Route>
        </Routes>
    )
}