const _apiUrl = "/api/thing"

type ThingPostDTO = {
    thingPostDTOName: string
    thingPostDTOThingTypeId: number
}

export const PostThing = (thingPostDTO: ThingPostDTO) => {
    return fetch (_apiUrl + `/post-thing`, {
        method: "POST",
        headers: { "Content-Type": "application-json"},
        body: JSON.stringify(thingPostDTO)
    })
}