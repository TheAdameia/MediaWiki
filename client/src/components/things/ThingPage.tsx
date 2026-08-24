import { Link, useNavigate, useParams } from "react-router-dom"
import { useAppContext } from "../../contexts/AppContext"
import { slugify } from "../utils/Slugify"
import { CitationCard } from "../citations/CitationCard"


export const ThingPage = () => {
    const { thingId, slug } = useParams()
    const { allThings, allCitations } = useAppContext()
    const navigate = useNavigate()

    if (!allThings || !allCitations) {
        return (
            <div>Loading...</div>
        )
    }

    const filteredThings = allThings.find(t => t.thingId === Number(thingId))

    // This would be replaced by CitationBridge
    const filteredCitations = allCitations.filter(c => c.subjectId === Number(thingId))

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
            <div>
                {filteredCitations.map(citation => 
                    <CitationCard
                        key={citation.citationId}
                        citation={citation}
                    />
                )}
            </div>
        </div>
    )
}