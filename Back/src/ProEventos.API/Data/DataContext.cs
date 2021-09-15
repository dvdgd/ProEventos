using Microsoft.EntityFrameworkCore;
using ProEvento.API.Models;

namespace ProEvento.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Evento> Eventos { get; set; }
    }
}