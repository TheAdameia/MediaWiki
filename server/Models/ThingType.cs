using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

// person, place, item, idea
public class ThingType
{
    [Key]
    public int ThingTypeId { get; set; }
    public required string ThingTypeClassification { get; set; }
}