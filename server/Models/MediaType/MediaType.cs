using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

// movie, book, show, comic, game
public class MediaType
{
    [Key]
    public int MediaTypeId { get; set; }
    public required string MediaTypeClassification { get; set; }
}