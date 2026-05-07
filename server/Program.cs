using MediaWiki.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddNpgsql<MediaWikiDbContext>(builder.Configuration["MediaWikiDbConnectionString"]);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.Run();