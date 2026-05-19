import { useState } from "react"
import Select from "react-select"


type SelectOption = {
    value: string
    label: string
}

type CitationObject = {
    speakerName: string
    otherMentions: SelectOption[]
}

export const CreateCitation = () => {
    const [citationObject, setCitationObject] = useState<CitationObject>
    ({
        speakerName: '',
        otherMentions: []
    })


    // const handleSubmit = (event) => {
    //     event.preventDefault()
    // }

    const options = [
        { value: 'bob', label: 'Bob'},
        { value: 'joe', label: 'Joe'},
        { value: 'ana', label: 'Ana'}
    ]

    return (
        <div>
            <h4>Citation Creation Form</h4>
            <div>display of selected options?</div>
            <form>
                <div>
                    <label>search for speaker (thing)</label>
                </div>
                <div>
                    <label>search for primary subject</label>
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
                </div>
            </form>
        </div>
    )
}