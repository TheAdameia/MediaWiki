const _apiUrl = "/api/media"

type MediaPostDTO = {
    mediaPostDTOTitle: string
    mediaPostDTOMediaTypeId: number
    mediaPostDTOReleaseDate: string
}

export const GetAllMedia = () => {
    return fetch(_apiUrl + `/all-media`)
        .then((res) => res.json())
}

export const PostMedia = (mediaPostDTO: MediaPostDTO) => {
    return fetch(_apiUrl + `/post-media`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(mediaPostDTO)
    })
}