import { useState } from "react"
import Select from "react-select"
import { Input } from "reactstrap"

type SelectOption = {
    value: number
    label: string
}

type MediaObject = {
    title: string,
    releaseDate: string,
    mediaType: SelectOption | null
}

export const CreateMedia = () => {
    const [mediaObject, setMediaObject] = useState<MediaObject>
    ({
        title: "",
        releaseDate: "",
        mediaType: null
    })

    // replace with appcontext
    const options = [
        { value: 1, label: 'Bob'},
        { value: 2, label: 'Joe'},
        { value: 3, label: 'Ana'}
    ]

    
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
                    <label>Placeholder Release Date</label>
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
                        options={options}
                        placeholder="Select Media Type"
                        value={mediaObject.mediaType}
                        onChange={(selectedOption) => {
                            setMediaObject(prev => ({
                                ...prev,
                                mediaTypeId: selectedOption
                            }))
                        }}
                    />
                </div>
                <div>
                    <h4>Review</h4>
                    <div>Title: "{mediaObject.title}"</div>
                    <div>Release Date: {mediaObject.releaseDate}</div>
                </div>
            </form>
        </div>
    )
}