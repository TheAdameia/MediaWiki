using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

// Citations are the editor's recording of a Thing in a Media.
public class Citation
{
    [Key]
    public int CitationId { get; set; }
    public int SpeakerId { get; set; }
    public required Thing Speaker { get; set; } // What makes the observation. Can be the narrator.
    public int SubjectId { get; set; }
    public required Thing Subject { get; set; } // the primary subject
    public int MediaId { get; set; }
    public required Media Media { get; set; } // what it happened in
    public required string Time { get; set; } // when it happened in-universe (probably need to refine this as its own class)
    public required string CitationContent { get; set; } // text presented to the user
    public ICollection<Thing>? Things { get; set; } // any other subjects *directly* involved
}