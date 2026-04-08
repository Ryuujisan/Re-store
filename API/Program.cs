using API.Data;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddTransient<ExceptionMiddleware>();
builder.Services.AddCors();
var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();

app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
// Configure the HTTP request pipeline.

app.MapControllers();
DbInitializer.InitDb(app);
app.Run();
