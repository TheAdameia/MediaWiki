import { useState } from "react"
import Select from "react-select"
import { Input } from "reactstrap"
import type { SelectOption } from "../types/selectOption"
import { useAppContext } from "../../contexts/AppContext"
import { PostThing, type ThingPostDTO } from "../../managers/thingManager"


type ThingObject = {
    name: string
    thingType: SelectOption | null
}

export const CreateThing = () => {
    const { thingTypes } = useAppContext()
    const [thingObject, setThingObject] = useState<ThingObject>
    ({
        name: "",
        thingType: null
    })

    // conversion for react-select: doesn't need to be state
    const thingTypeOptions: SelectOption[] = (thingTypes ?? []).map(t => ({
        value: t.thingTypeId,
        label: t.thingTypeClassification
    }))

    const handleSubmit = (event) => {
            event.preventDefault()
    
            if (!thingObject.thingType) {
                window.alert("Thing type must be selected")
                return
            }
    
            if (!thingObject.name) {
                window.alert("Thing must have a name")
                return
            }
    
            const newThing: ThingPostDTO = {
               thingPostDTOName: thingObject.name,
               thingPostDTOThingTypeId: thingObject.thingType.value
            }
    
            console.log(newThing)
    
            PostThing(newThing).then(() => {
                // get and set thing
                // navigate
            })
    
            // show confirmation of post to user
    
        }


    return (
        <div>
            <h2>Thing Creation Form</h2>
            <form>
                <div>
                    <label>Name</label>
                    <Input
                        type="text"
                        value={thingObject.name}
                        onChange={((e) => {
                            const objectCopy = {...thingObject}
                            objectCopy.name = e.target.value
                            setThingObject(objectCopy)
                        })}
                    />
                </div>
                <div>
                    <label>Thing Type</label>
                    <Select
                        options={thingTypeOptions}
                        placeholder="Select Thing Type"
                        value={thingObject.thingType}
                        onChange={(selectedOption) => {
                            setThingObject(prev => ({
                                ...prev,
                                thingType: selectedOption
                            }))
                        }}
                    />
                </div>
                <div>
                    <h4>Review</h4>
                    <div>Name: "{thingObject.name}"</div>
                    {thingObject.thingType
                        ? <div>Type: {thingObject.thingType?.label}</div>
                        : <div>Type: one must be selected</div>
                    }
                </div>
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}