using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
    [ForeignKey(nameof(Location))]
    public int? LocationId { get; set; }
    public Thing? Location { get; set; }
    // if more thing-thing relationships are needed other than location, consider
    // a junction table
}