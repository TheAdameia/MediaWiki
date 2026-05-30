import { useState } from "react"
import Select from "react-select"
import { Input } from "reactstrap"
import type { SelectOption } from "../types/selectOption"
import { useAppContext } from "../../contexts/AppContext"
import type { MediaPostDTO } from "../../managers/mediaManager"

type MediaObject = {
    title: string,
    releaseDate: string,
    mediaType: SelectOption | null
}

export const CreateMedia = () => {
    const { mediaTypes } = useAppContext()
    const [mediaObject, setMediaObject] = useState<MediaObject>
    ({
        title: "",
        releaseDate: "",
        mediaType: null
    })

    // conversion for react-select: doesn't need to be state
    const mediaTypeOptions: SelectOption[] = (mediaTypes ?? []).map(m => ({
        value: m.mediaTypeId,
        label: m.mediaTypeClassification
    }))

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!mediaObject.mediaType) {
            return
        }

        const newMedia: MediaPostDTO = {
            mediaPostDTOTitle: mediaObject.title,
            mediaPostDTOReleaseDate: mediaObject.releaseDate,
            mediaPostDTOMediaTypeId: mediaObject.mediaType.value
        }

        console.log(newMedia)

    }

    
    return (
        <div>
            <h2>Media Creation Form</h2>
            <form>
                <div>
                    <label>Title</label>
                    <Input
                        type="text"
                        value={mediaObject.title}
                        onChange={((e) => {
                            const objectCopy = {...mediaObject}
                            objectCopy.title = e.target.value
                            setMediaObject(objectCopy)
                        })}
                    />
                </div>
                <div>
                    <label>Release Date</label>
                    <Input
                        type="text"
                        value={mediaObject.releaseDate}
                        onChange={((e) => {
                            const objectCopy = {...mediaObject}
                            objectCopy.releaseDate = e.target.value
                            setMediaObject(objectCopy)
                        })}
                    />
                </div>
                <div>
                    <label>Media Type</label>
                    <Select
                        options={mediaTypeOptions}
                        placeholder="Select Media Type"
                        value={mediaObject.mediaType}
                        onChange={(selectedOption) => {
                            setMediaObject(prev => ({
                                ...prev,
                                mediaType: selectedOption
                            }))
                        }}
                    />
                </div>
                <div>
                    <h4>Review</h4>
                    <div>Title: "{mediaObject.title}"</div>
                    <div>Type: {mediaObject.mediaType?.label}</div>
                    <div>Release Date: {mediaObject.releaseDate}</div>
                </div>
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}