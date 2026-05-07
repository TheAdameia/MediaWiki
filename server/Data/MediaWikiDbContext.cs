using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using MediaWiki.Models;
using Microsoft.EntityFrameworkCore;

namespace MediaWiki.Data;
public class MediaWikiDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;
    public DbSet<Media> Media { get; set; }
    public DbSet<Citation> Citations { get; set; }
    public DbSet<MediaType> MediaTypes { get; set; }
    public DbSet<Thing> Things { get; set; }
    public DbSet<ThingType> ThingTypes { get; set; }
    public MediaWikiDbContext(DbContextOptions<MediaWikiDbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Media>().HasData(new Media[]
        {
            new Media
            {
                MediaId = 1,
                MediaTitle = "Default",
                ReleaseDate = "1",
                MediaTypeId = 1
            }
        });

        builder.Entity<MediaType>().HasData(new MediaType[]
        {
            new MediaType
            {
                MediaTypeId = 1,
                MediaTypeClassification = "Written Work"
            },
            new MediaType
            {
                MediaTypeId = 2,
                MediaTypeClassification = "Movie"
            },
            new MediaType
            {
                MediaTypeId = 3,
                MediaTypeClassification = "Show"
            },
            new MediaType
            {
                MediaTypeId = 4,
                MediaTypeClassification = "Comic"
            },
            new MediaType
            {
                MediaTypeId = 5,
                MediaTypeClassification = "Game"
            }

        });

        builder.Entity<Thing>().HasData(new Thing[]
        {
            new Thing
            {
                ThingId = 1,
                ThingName = "Narrator",
                ThingTypeId = 1
            }
            
        });

        builder.Entity<ThingType>().HasData(new ThingType[]
        {
            new ThingType
            {
                ThingTypeId = 1,
                ThingTypeClassification = "Person"
            },
            new ThingType
            {
                ThingTypeId = 2,
                ThingTypeClassification = "Place"
            },
            new ThingType
            {
                ThingTypeId = 3,
                ThingTypeClassification = "Item"
            },
            new ThingType
            {
                ThingTypeId = 4,
                ThingTypeClassification = "Idea"
            },
            new ThingType
            {
                ThingTypeId = 5,
                ThingTypeClassification = "Event"
            }
            
        });

        builder.Entity<Citation>().HasData(new Citation[]
        {
            new Citation
            {
                CitationId = 1,
                SpeakerId = 1,
                SubjectId = 1,
                MediaId = 1,
                Time = "1",
                CitationContent = "self-referential!"
            }
        });
    }
}
