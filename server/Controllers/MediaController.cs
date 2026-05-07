
using MediaWiki.Data;
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
            .Include(m => m.MediaTypeId)
            .ToList();

        if (AllMedia == null || AllMedia.Count < 1)
        {
            return BadRequest();
        }

        return Ok(AllMedia);
    }
}