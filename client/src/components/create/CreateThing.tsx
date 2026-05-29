import { useState } from "react"
import Select from "react-select"
import { Input } from "reactstrap"
import type { SelectOption } from "../types/selectOption"
import { useAppContext } from "../../contexts/AppContext"


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
                    <label>Media Type</label>
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
            </form>
        </div>
    )
}