namespace Nice2BeerU.Models
{
    public class ApiList<T>
    {
        public int nb { get; set; }
        public T[] feed { get; set; }
    }

}