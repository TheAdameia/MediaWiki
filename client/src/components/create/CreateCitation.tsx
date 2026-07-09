import { useState } from "react"
import Select from "react-select"
import { Input } from "reactstrap"
import { useAppContext } from "../../contexts/AppContext"
import type { SelectOption } from "../types/selectOption"
import { PostCitation, type CitationPostDTO } from "../../managers/citationManager"
import { useNavigate } from "react-router-dom"

type CitationObject = {
    speakerName: SelectOption | null
    primarySubject: SelectOption | null
    media: SelectOption | null
    time: string
    citation: string
}

export const CreateCitation = () => {
    const { allMedia, allThings } = useAppContext()
    const navigate = useNavigate()
    const [citationObject, setCitationObject] = useState<CitationObject>
    ({
        speakerName: null,
        primarySubject: null,
        media: null,
        time: "",
        citation: ""
    })

    // conversions for react-select: doesn't need to be state
    const mediaOptions: SelectOption[] = (allMedia ?? []).map(m => ({
        value: m.mediaId,
        label: m.mediaTitle
    }))

    const thingOptions: SelectOption[] = (allThings ?? []).map(t => ({
        value: t.thingId,
        label: t.thingName
    }))

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!citationObject.citation) {
            window.alert("Citation must have content")
            return
        }

        if (!citationObject.speakerName) {
            window.alert("Citation must have a speaker (can be the narrator)")
            return
        }

        if (!citationObject.primarySubject) {
            window.alert("Citation must have a subject")
            return
        }

        if (!citationObject.media) {
            window.alert("Citation must specify its origin media")
            return
        }

        const citationToPost: CitationPostDTO = {
            citationPostDTOSpeakerId: citationObject.speakerName.value,
            citationPostDTOSubjectId: citationObject.primarySubject.value,
            citationPostDTOMediaId: citationObject.media.value,
            citationPostDTOTime: citationObject.time,
            citationPostDTOContent: citationObject.citation
        }

        PostCitation(citationToPost).then(() => {
            // get and set citations? idk that might be a lot of data
            navigate("/")
        })

        // show confirmation of post to user


    }

    if (allMedia == undefined || allMedia == null) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h2>Citation Creation Form</h2>
            <form>
                <div>
                    <label>search for media</label>
                    <Select 
                        options={mediaOptions}
                        placeholder="Select Media"
                        value={citationObject.media}
                        onChange={(selectedOption) => {
                            setCitationObject(prev => ({
                                ...prev,
                                media: selectedOption
                            }))
                        }}
                    />
                </div>
                <div>
                    <label>search for speaker (thing)</label>
                    <Select
                        options={thingOptions}
                        placeholder="Search speaker"
                        value={citationObject.speakerName}
                        onChange={(selectedOption) => {
                            setCitationObject(prev => ({
                                ...prev,
                                speakerName: selectedOption
                            }))
                        }}
                    />
                </div>
                <div>
                    <label>search for primary subject</label>
                    <Select
                        options={thingOptions}
                        placeholder="Search primary subject"
                        value={citationObject.primarySubject}
                        onChange={(selectedOption) => {
                            setCitationObject(prev => ({
                                ...prev,
                                primarySubject: selectedOption
                            }))
                        }}
                    />
                </div>
                <div>
                    <label>Time (in-universe)</label>
                    <Input
                        type="text"
                        value={citationObject.time}
                        onChange={((e) => {
                            const objectCopy = {...citationObject}
                            objectCopy.time = e.target.value
                            setCitationObject(objectCopy)
                        })}
                    />
                </div>
                <div>
                    <label>media field</label>
                    <Input
                        type="text"
                        value={citationObject.citation}
                        onChange={((e) => {
                            const objectCopy = {...citationObject}
                            objectCopy.citation = e.target.value
                            setCitationObject(objectCopy)
                        })}
                    />
                </div>
                <div>
                    <h4>Review</h4>
                    {citationObject.speakerName 
                        ? <div>Speaker: {citationObject.speakerName?.label}</div>
                        : <div>Speaker: one must be selected</div>
                    }
                    {citationObject.primarySubject
                        ? <div>Primary Subject: {citationObject.primarySubject?.label}</div>
                        : <div>Primary Subject: one must be selected</div>
                    }
                    <div>Citation: "{citationObject.citation}"</div>
                </div>
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}