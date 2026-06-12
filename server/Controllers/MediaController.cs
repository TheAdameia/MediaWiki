using System.Transactions;
using MediaWiki.Data;
using MediaWiki.Models;
using MediaWiki.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MediaWiki.Controllers;
[ApiController]
[Route("api/[controller]")]
public class MediaController : ControllerBase
{
    private MediaWikiDbContext _dbContext;

    public MediaController(MediaWikiDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet("all-media")]
    public IActionResult GetAllMedia()
    {
        var AllMedia =  _dbContext.Media
            .ToList();

        if (AllMedia == null || AllMedia.Count < 1)
        {
            return BadRequest("No Media found");
        }

        return Ok(AllMedia);
    }

    [HttpPost("post-media")]
    public IActionResult Post(MediaPostDTO mediaPostDTO)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest($"MediaPostDTO model invalid: {ModelState}");
        }

        using var transaction = _dbContext.Database.BeginTransaction();
        try
        {
            var media = new Media
            {
                MediaTitle = mediaPostDTO.MediaPostDTOTitle,
                MediaTypeId = mediaPostDTO.MediaPostDTOMediaTypeId,
                ReleaseDate = mediaPostDTO.MediaPostDTOReleaseDate
            };

            _dbContext.Media.Add(media);
            _dbContext.SaveChanges();
            transaction.Commit();
            return Created($"api/media/{media.MediaId}", media);
        }
        catch(Exception ex)
        {
            transaction.Rollback();
            return StatusCode(500, $"An error occurred while trying to create a Media: {ex.Message}");
        }
    }

    [HttpDelete("delete-media")]
    public IActionResult Delete(int mediaId)
    {
        // it would be wise to make this and other deletes into soft deletes later
        // since that requires modifying classes it can wait

        var mediaToDelete = _dbContext.Media.SingleOrDefault(m => m.MediaId == mediaId);

        if (mediaToDelete == null)
        {
            return BadRequest($"Media not found for delete request, id: {mediaId}");
        };

        using var transaction = _dbContext.Database.BeginTransaction();
        try
        {
            _dbContext.Media.Remove(mediaToDelete);
            _dbContext.SaveChanges();

            return NoContent();
        }
        catch(Exception ex)
        {
            transaction.Rollback();
            return StatusCode(500, $"An error occurred while trying to delete a Media: {ex.Message}");
        }
    }
}