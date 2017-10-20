namespace Nice2BeerU.Models
{
    public class Address : BaseEntity
    {
        public string City { get; set; }
        public string Country { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }


}
