using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

// person, place, distinct notable object, distinct (local to the universe) idea, distinct event
public class Thing
{
    [Key]
    public int ThingId { get; set; }
    public required string ThingName { get; set; }
    // icoll of speaker, subject, other mentions?
}