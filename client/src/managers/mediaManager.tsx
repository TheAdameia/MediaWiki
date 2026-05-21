const _apiUrl = "/api/media"

type MediaPostDTO = {
    mediaPostDTOTitle: string
    mediaPostDTOMediaTypeId: number
    mediaPostDTOReleaseDate: string
}

export const GetAllMedia = async () => {
    const res = await fetch(_apiUrl + `/all-media`)

    if (!res.ok) {
        throw new Error(`API Error: ${res.status}`)
    }

    return res.json()
}

export const PostMedia = (mediaPostDTO: MediaPostDTO) => {
    return fetch(_apiUrl + `/post-media`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(mediaPostDTO)
    })
}