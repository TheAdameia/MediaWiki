const _apiUrl = "/api/thingtype"

export const GetAllThingTypes = () => {
    return fetch(_apiUrl + `/get-al`)
        .then((res) => res.json())
}