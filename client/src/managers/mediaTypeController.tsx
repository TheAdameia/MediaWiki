const _apiUrl = "/api/mediatype"

export const GetAllMediaTypes = () => {
    return fetch(_apiUrl + `/get-all`)
        .then((res) => res.json())
}