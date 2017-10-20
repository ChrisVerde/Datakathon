using System.Data.Entity;

namespace Nice2BeerU.Models
{
    public class Nice2BeerUContext : DbContext
    {
        public IDbSet<Beer> Beer { get; set; }
        public IDbSet<Profile> Profile { get; set; }
        public IDbSet<Podium> Podium { get; set; }
        public IDbSet<Address> Address { get; set; }
        public IDbSet<Brewery> Brewery { get; set; }
        public IDbSet<Category> Category { get; set; }
        public IDbSet<Style> Style { get; set; }

        public Nice2BeerUContext(string connectionString)
            : base(connectionString)
        { }
        public Nice2BeerUContext()
            : this("name=N2BUEntities")
        { }
    }
}
