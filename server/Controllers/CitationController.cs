using MediaWiki.Data;
using MediaWiki.Models;
using MediaWiki.Models.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace MediaWiki.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CitationController : ControllerBase
{
    private MediaWikiDbContext _dbContext;

    public CitationController(MediaWikiDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet("by-id")]
    public IActionResult GetOne(int id)
    {
        return Ok(_dbContext.Citations
            .SingleOrDefault(c => c.CitationId == id));
    }

    [HttpPost("post-citation")]
    public IActionResult PostCitation(CitationPostDTO citationPostDTO)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest($"CitationPostDTO model invalid: {ModelState}");
        }

        using var transaction = _dbContext.Database.BeginTransaction();
        try
        {
            var citation = new Citation
            {
                SpeakerId = citationPostDTO.CitationPostDTOSpeakerId,
                SubjectId = citationPostDTO.CitationPostDTOSubjectId,
                MediaId = citationPostDTO.CitationPostDTOMediaId,
                Time = citationPostDTO.CitationPostDTOTime,
                CitationContent = citationPostDTO.CitationPostDTOContent
            };

            _dbContext.Citations.Add(citation);
            _dbContext.SaveChanges();
            transaction.Commit();
            return Created($"api/citation/{citation.CitationId}", citation);
        }
        catch(Exception ex)
        {
            transaction.Rollback();
            return StatusCode(500, $"An error occurred while trying to create a Citation: {ex.Message}");
        }
    }
}