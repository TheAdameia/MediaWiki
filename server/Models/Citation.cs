using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

// Citations are the editor's recording of a Thing in a Media.
public class Citation
{
    [Key]
    public int CitationId { get; set; }
    public required Thing Thing { get; set; } // the primary subject
    public required Media Media { get; set; } // what it happened in
    public required string CitationContent { get; set; } // text presented to the user
    public ICollection<Thing>? Things { get; set; } // any other subjects directly involved
}