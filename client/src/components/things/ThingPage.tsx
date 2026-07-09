import { Link, useNavigate, useParams } from "react-router-dom"
import { useAppContext } from "../../contexts/AppContext"
import { slugify } from "../utils/Slugify"


export const ThingPage = () => {
    const { thingId, slug } = useParams()
    const { allThings } = useAppContext()
    const navigate = useNavigate()

    if (!allThings) {
        return (
            <div>Loading...</div>
        )
    }

    const filteredThings = allThings.find(t => t.thingId === Number(thingId))

    if (!filteredThings) {
        return (
            <div>Not found</div>
        )
    }

    const correctSlug = slugify(filteredThings.thingName)

    // janky, stupid, works. Adds or replaces the slug on load.
    if (slug !== correctSlug) {
        navigate(`/thing/${thingId}/${correctSlug}`, { replace: true })
        return
    }

    return (
        // display media referenced in, citations on page
        <div>
            <Link to={`/thing/list`}>
                <div>
                    Return to Thing List
                </div>
            </Link>
            <div>{filteredThings.thingName}</div>
            {/* Sort for citations... display by date.
            <div>View page where thing is the speaker, thing is the subject, thing is mentioned.</div>
            <div>Toggle by time system (real or universe)</div> */}
        </div>
    )
}