using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

public class Thing
{
    [Key]
    public int ThingId { get; set; }
    public required string ThingName { get; set; }
}