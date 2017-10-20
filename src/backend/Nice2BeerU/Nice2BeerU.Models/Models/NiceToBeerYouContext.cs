using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Nice2BeerU.Models
{
    public class Profile : BaseEntity
    {
        public string UserName { get; set; }
        public string FullName { get; set; }
        public DateTime BirthDate { get; set; }
        public int MyProperty { get; set; }
        
        public virtual Address Address { get; set; }
        public virtual Podium Podium { get; set; }
        public IList<Beer> ExcellentBeers { get; set; }
        public IList<Beer> DisgustingBeers { get; set; }
    }

    public class Address : BaseEntity
    {
        public string City { get; set; }
        public string Country { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }

    public class Podium : BaseEntity 
    {
        public virtual Beer MyBesta { get; set; }
        public virtual Beer MySecondBesta { get; set; }
        public virtual Beer MyWannabeBesta { get; set; }

        public virtual Profile Profile { get; set; }
    }


    public class Nice2BeerUContext : DbContext{
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
            : this("DefaultConnection")
        { }


    }

}