import { useState } from "react"
import Select from "react-select"
import { Input } from "reactstrap"
import { useAppContext } from "../../contexts/AppContext"
import type { SelectOption } from "../types/selectOption"

type CitationObject = {
    speakerName: SelectOption | null
    primarySubject: SelectOption | null
    otherMentions: SelectOption[]
    media: SelectOption | null
    citation: string
}

export const CreateCitation = () => {
    const { allMedia, allThings } = useAppContext()
    const [citationObject, setCitationObject] = useState<CitationObject>
    ({
        speakerName: null,
        primarySubject: null,
        otherMentions: [],
        media: null,
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

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    // // this is gonna need to reduce whatever nested object monstrosity react-select produces into a DTO. 
    // }

    if (allMedia == undefined || allMedia == null) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h2>Citation Creation Form</h2>
            <div>display of selected options?</div>
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
                    <label>search for other mentions</label>
                    <Select 
                        options={thingOptions}
                        isMulti
                        placeholder="Search things"
                        value={citationObject.otherMentions}
                        onChange={(selectedOptions) => {
                            setCitationObject(prev => ({
                                ...prev,
                                otherMentions: [...(selectedOptions || [])]
                            }))
                        }}
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
                    {citationObject.otherMentions.length > 1
                        ? <div> Mentions:{" "}{citationObject.otherMentions.map(m => m.label).join(", ")}</div>
                        : <div>No mentions</div>
                    }
                    <div>Citation: "{citationObject.citation}"</div>
                </div>
            </form>
        </div>
    )
}