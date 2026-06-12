using MediaWiki.Data;
using Microsoft.AspNetCore.Mvc;

namespace MediaWiki.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ThingTypeController : ControllerBase
{
    private MediaWikiDbContext _dbContext;

    public ThingTypeController(MediaWikiDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet("get-all")]
    public IActionResult GetAll()
    {
        return Ok(_dbContext.ThingTypes.ToList());
    }
}