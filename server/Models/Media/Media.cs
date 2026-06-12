using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

public class Media
{
    [Key]
    public int MediaId { get; set; }
    public required string MediaTitle { get; set; }
    public int MediaTypeId { get; set; }
    public MediaType? MediaType { get; set; }
    public required string ReleaseDate { get; set; } // when the media was released or first became available
    
    // consider: "association" class for things commonly associated with different canons or timelimes? i.e.
    // star wars legends, Marvel comic runs, etc
}