using MediaWiki.Data;
using Microsoft.AspNetCore.Mvc;

namespace MediaWiki.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MediaTypeController : ControllerBase
{
    private MediaWikiDbContext _dbContext;

    public MediaTypeController(MediaWikiDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet("get-all")]
    public IActionResult GetAll()
    {
        return Ok(_dbContext.MediaTypes.ToList());
    }
}