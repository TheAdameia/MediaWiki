import { Link } from "react-router-dom"
import { slugify } from "../utils/Slugify"
import type { MediaCardProps } from "../types/mediaCardProps"
import "./media.css"


export const MediaCard = ({ media }: MediaCardProps) => {
    const slug = slugify(media.mediaTitle)

    return (
        <div className="mediaCard-card">
            <Link to={`/media/${media.mediaId}/${slug}`}>
                <div className="mediaCard-inner">
                    <div className="mediaCard-info">{media.mediaTitle}</div>
                    <div>Released: {media.releaseDate}</div>
                </div>
            </Link>
        </div>
    )
}