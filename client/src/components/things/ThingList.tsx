import { useAppContext } from "../../contexts/AppContext"
import { ThingCard } from "./ThingCard"


export const ThingList = () => {
const { allThings } = useAppContext()

    return (
        <div>
            {allThings && allThings.length > 0
                ? allThings?.map(thing =>
                    <ThingCard
                        key={thing.thingId}
                        thing={thing}
                    />
                ) : (
                    <div>Nothing Found</div>
            )}
        </div>
    )
}