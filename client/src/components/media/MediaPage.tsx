import { useNavigate, useParams } from "react-router-dom"
import { useAppContext } from "../../contexts/AppContext"
import { slugify } from "../utils/Slugify"

export const MediaPage = () => {
    const { mediaId, slug } = useParams()
    const { allMedia } = useAppContext()
    const navigate = useNavigate()

    if (!allMedia) {
        return (
            <div>Loading...</div>
        )
    }

    const filteredMedia = allMedia.find(m => m.mediaId === Number(mediaId))

    if (!filteredMedia) {
        return (
            <div>Not found</div>
        )
    }

    const correctSlug = slugify(filteredMedia.mediaTitle)

    // janky, stupid, works. Adds or replaces the slug on load.
    if (slug !== correctSlug) {
        navigate(`/media/${mediaId}/${correctSlug}`, { replace: true })
        return
    }

    return (
        // display number of things, citations on page
        <div>
            <div>{filteredMedia.mediaTitle}</div>
            <div>Release date: {filteredMedia.releaseDate}</div>
        </div>
    )
}