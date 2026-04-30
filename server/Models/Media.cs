using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

public class Media
{
    [Key]
    public int MediaId { get; set; }
    public required string MediaTitle { get; set; }
    public required MediaType MediaType { get; set; }
}