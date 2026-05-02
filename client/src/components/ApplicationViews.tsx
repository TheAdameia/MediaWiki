import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./LandingPage"


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
        </Routes>
    )
}