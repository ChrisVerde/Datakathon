namespace Nice2BeerU.Models
{
    public class Json<T>
    {
        public bool success { get; set; }
        public string message { get; set; }
        public ApiList<T> feed { get; set; }
    }

}