import { useState } from "react"
import Select from "react-select"
import { Input } from "reactstrap"

// react-select always works in objects
type SelectOption = {
    value: number
    label: string
}

type CitationObject = {
    speakerName: SelectOption | null
    primarySubject: SelectOption | null
    otherMentions: SelectOption[]
    citation: string
}

export const CreateCitation = () => {
    const [citationObject, setCitationObject] = useState<CitationObject>
    ({
        speakerName: null,
        primarySubject: null,
        otherMentions: [],
        citation: ""
    })


    // const handleSubmit = (event) => {
    //     event.preventDefault()
    // // this is gonna need to reduce whatever nested object monstrosity react-select produces into a DTO. 
    // }


    // replace these with appcontext
    const options = [
        { value: 1, label: 'Bob'},
        { value: 2, label: 'Joe'},
        { value: 3, label: 'Ana'}
    ]

    const options2 = [
        {value: 4, label: 'fourth'},
        {value: 5, label: 'fifth'},
        {value: 6, label: 'sixth'}
    ]

    const options3 = [
        {value: 1, label: 'glorp'},
        {value: 2, label: 'the other guy'},
        {value: 3, label: 'narrator'}
    ]

    return (
        <div>
            <h2>Citation Creation Form</h2>
            <div>display of selected options?</div>
            <form>
                <div>
                    <label>search for speaker (thing)</label>
                    <Select
                        options={options3}
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
                        options={options2}
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
                        options={options}
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