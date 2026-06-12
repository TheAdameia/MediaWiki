const _apiUrl = "/api/thing"

export type ThingPostDTO = {
    thingPostDTOName: string
    thingPostDTOThingTypeId: number
}

export const PostThing = (thingPostDTO: ThingPostDTO) => {
    return fetch (_apiUrl + `/post-thing`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(thingPostDTO)
    })
}

export const GetThing = (id: number) => {
    return fetch(_apiUrl + `/by-id?id=${id}`)
        .then((res) => res.json())
}

export const GetAllThings = () => {
    return fetch(_apiUrl + `/get-all`)
        .then((res) => res.json())
}