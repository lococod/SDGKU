using Microsoft.EntityFrameworkCore;

namespace Rental.Models{

    public class DataContext : DbContext {

        public DataContext (DbContextOptions<DataContext> options ) : base(options) {

        }

        public DbSet<Car> Cars {get; set;}

    }

    
}