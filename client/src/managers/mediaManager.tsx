const _apiUrl = "/api/media"

export const GetAllMedia = () => {
    return fetch(_apiUrl + `/all-media`)
        .then((res) => res.json())
}