import { Link } from "react-router-dom"
import { slugify } from "../utils/Slugify"
import type { MediaCardProps } from "../types/mediaCardProps"


export const MediaCard = ({ media }: MediaCardProps) => {
    const slug = slugify(media.mediaTitle)

    return (
        <div>
            <Link to={`/media/${media.mediaId}/${slug}`}>
                <div>
                    <div>{media.mediaTitle}</div>
                    <div>Released: {media.releaseDate}</div>
                </div>
            </Link>
        </div>
    )
}