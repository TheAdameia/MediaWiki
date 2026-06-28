import { Link } from "react-router-dom"
import { slugify } from "../utils/Slugify"
import type { ThingCardProps } from "../types/thingCardProps"


export const ThingCard = ({ thing }: ThingCardProps) => {
    const slug = slugify(thing.thingName)

    return (
        <div>
            <Link to={`/thing/${thing.thingId}/${slug}`}>
                <div>
                    <div>{thing.thingName}</div>
                </div>
            </Link>
        </div>
    )
}