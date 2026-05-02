using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using MediaWiki.Models;
using Microsoft.EntityFrameworkCore;

namespace MediaWiki.Data;
public class MediaWikiDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;
    public DbSet<Media> Media { get; set; }
    public MediaWikiDbContext(DbContextOptions<MediaWikiDbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }
}
