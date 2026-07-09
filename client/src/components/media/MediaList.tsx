import { useAppContext } from "../../contexts/AppContext"
import { MediaCard } from "./MediaCard"


export const MediaList = () => {
    const { allMedia } = useAppContext()

    return (
        <div>
            {allMedia && allMedia.length > 0
                ? allMedia?.map(media =>
                    <MediaCard
                        key={media.mediaId}
                        media={media}
                    />
                ) : (
                    <div>Nothing Found</div>
            )}
        </div>
    )
}