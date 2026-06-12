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