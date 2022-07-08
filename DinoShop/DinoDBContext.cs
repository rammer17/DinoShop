using DinoShop.Models.DB;
using Microsoft.EntityFrameworkCore;

namespace DinoShop
{
    public class DinoDBContext : DbContext
    {
        public DinoDBContext(DbContextOptions<DinoDBContext> options) : base(options) { }
        public DbSet<Dino> Dinosaurs { get; set; }
    }
}
