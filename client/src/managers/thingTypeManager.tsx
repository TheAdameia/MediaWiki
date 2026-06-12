const _apiUrl = "/api/thingtype"

export const GetAllThingTypes = () => {
    return fetch(_apiUrl + `/get-all`)
        .then((res) => res.json())
}