using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models.DTOs;

public class MediaPostDTO
{
    [Key]
    public required string MediaPostDTOTitle { get; set; }
    public int MediaPostDTOMediaTypeId { get; set; }
    public required string MediaPostDTOReleaseDate { get; set; }
}