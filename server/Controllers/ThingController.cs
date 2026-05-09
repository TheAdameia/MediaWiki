using MediaWiki.Data;
using MediaWiki.Models;
using MediaWiki.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MediaWiki.Controllers;

[ApiController]
[Route("api/controller")]
public class ThingController : ControllerBase
{
    private MediaWikiDbContext _dbContext;

    public ThingController(MediaWikiDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet("by-id")]
    public IActionResult GetOne(int id)
    {
        return Ok(_dbContext.Things
            .SingleOrDefault(t => t.ThingId == id));
    }

    [HttpGet("get-all")]
    public IActionResult GetAll()
    {
        return Ok(_dbContext.Things.ToList());
    }

    [HttpPost("post-thing")]
    public IActionResult PostThing(ThingPostDTO thingPostDTO)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest($"ThingPostDTO model invalid: {ModelState}");
        }

        using var transaction = _dbContext.Database.BeginTransaction();
        try
        {
            var thing = new Thing
            {
                ThingName = thingPostDTO.ThingPostDTOName,
                ThingTypeId = thingPostDTO.ThingPOstDTOThingTypeId
            };

            _dbContext.Things.Add(thing);
            _dbContext.SaveChanges();
            transaction.Commit();
            return Created($"api/thing/{thing.ThingId}", thing);
        }
        catch(Exception ex)
        {
            transaction.Rollback();
            return StatusCode(500, $"An error occurred while trying to create a Thing: {ex.Message}");
        }
    }
}