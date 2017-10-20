using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


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
}
