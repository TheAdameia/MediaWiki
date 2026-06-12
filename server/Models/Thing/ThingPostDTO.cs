using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models.DTOs;

public class ThingPostDTO
{
    [Key]
    public required string ThingPostDTOName { get; set; }
    public int ThingPOstDTOThingTypeId { get; set; }
}