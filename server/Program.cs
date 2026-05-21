using MediaWiki.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<MediaWikiDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("MediaWikiDbConnectionString")
    ));

builder.Services.AddControllers();

var app = builder.Build();


Console.WriteLine(builder.Configuration.GetConnectionString("MediaWikiDbConnectionString"));
// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.MapControllers();

app.Run();