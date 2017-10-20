
namespace Nice2BeerU.Models
{
    public class Podium : BaseEntity
    {
        public virtual Beer MyBesta { get; set; }
        public virtual Beer MySecondBesta { get; set; }
        public virtual Beer MyWannabeBesta { get; set; }

        public virtual Profile Profile { get; set; }
    }


}
