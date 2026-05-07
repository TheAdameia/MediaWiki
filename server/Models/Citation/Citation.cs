using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MediaWiki.Models;

// Citations are the editor's recording of a Thing in a Media.
public class Citation
{
    [Key]
    public int CitationId { get; set; }
    [ForeignKey(nameof(Speaker))]
    public int SpeakerId { get; set; }
    public Thing? Speaker { get; set; } // What makes the observation. Can be the narrator.
    [ForeignKey(nameof(Subject))]
    public int SubjectId { get; set; }
    public Thing? Subject { get; set; } // the primary subject
    public int MediaId { get; set; }
    public Media? Media { get; set; } // what it happened in
    public required string Time { get; set; } // when it happened in-universe (probably need to refine this as its own class)
    public required string CitationContent { get; set; } // text presented to the user
    // public ICollection<Thing>? Things { get; set; } // any other subjects *directly* involved
    // this one ^ needs to be reframed as a bridge class
}