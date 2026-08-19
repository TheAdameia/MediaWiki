using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models.DTOs;

public class CitationPostDTO
{
    public int CitationPostDTOSpeakerId { get; set; }
    public int CitationPostDTOSubjectId { get; set; }
    public int CitationPostDTOMediaId { get; set; }
    public required string CitationPostDTOTime { get; set; }
    public required string CitationPostDTOContent { get; set; }
    public int CitationPostFormatType { get; set; }
}