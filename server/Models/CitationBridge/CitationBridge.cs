using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

// This class bridges a Citation and a Thing, adding values
// that determine the formatting type (paragraph, table) for
// the citation data on that particular Thing page and the
// order on that page.
public class CitationBridge
{
    [Key]
    public int CitationBridgeId { get; set; }
    public int CitationId { get; set; }
    public Citation? Citation { get; set; }
    public int ThingId { get; set; }
    public Thing? Thing { get; set; }
    public int FormatType { get; set; } //front end handles this
    public int DisplayOrder { get; set; }

}