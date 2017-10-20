using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Nice2BeerU.Models
{
    public class Brewery
    {
        public string id_breweries { get; set; }
        public string name_brewery { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string country { get; set; }
        public string gps { get; set; }
        public string web { get; set; }
    }

}