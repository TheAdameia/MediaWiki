using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

// person, place,
// distinct, specific, and notable: object, (local to the universe) idea, or event
public class Thing
{
    [Key]
    public int ThingId { get; set; }
    public required string ThingName { get; set; }
    // icoll of speaker, subject, other mentions?
    public int ThingTypeId { get; set; }
    public ThingType? ThingType { get; set; }
}