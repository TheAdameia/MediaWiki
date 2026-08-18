using System.ComponentModel.DataAnnotations;

namespace MediaWiki.Models;

// This class bridges a Citation and a Thing, adding gapped integer values that determine the order on that page.
public class CitationBridge
{
    [Key]
    public int CitationBridgeId { get; set; }
    public int CitationId { get; set; }
    public Citation? Citation { get; set; }
    public int ThingId { get; set; }
    public Thing? Thing { get; set; }
    public int DisplayOrder { get; set; } //front end handles this, integer gap of 1000
}