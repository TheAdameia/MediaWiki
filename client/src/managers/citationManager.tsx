const _apiUrl = "/api/citation"

export type CitationPostDTO = {
    citationPostDTOSpeakerId: number
    citationPostDTOSubjectId: number
    citationPostDTOMediaId: number
    citationPostDTOTime: string
    citationPostDTOContent: string
}

export const PostCitation = (citationPostDTO : CitationPostDTO) => {
    return fetch (_apiUrl + `/post-citation`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(citationPostDTO)
    })
}

export const GetAllCitations = async () => {
    const res = await fetch(_apiUrl + `/all-citations`)

    if (!res.ok) {
        throw new Error(`API Error: ${res.status}`)
    }

    return res.json()
}