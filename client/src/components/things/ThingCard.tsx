import { Link } from "react-router-dom"
import { slugify } from "../utils/Slugify"
import type { ThingCardProps } from "../types/thingCardProps"
import "../media/media.css"


export const ThingCard = ({ thing }: ThingCardProps) => {
    const slug = slugify(thing.thingName)

    return (
        <div className="mediaCard-card">
            <Link to={`/thing/${thing.thingId}/${slug}`}>
                <div className="mediaCard-inner">
                    <div className="mediaCard-info">{thing.thingName}</div>
                </div>
            </Link>
        </div>
    )
}