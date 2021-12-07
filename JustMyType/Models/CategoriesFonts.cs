using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JustMyType.Models
{
    public class CategoriesFonts
    {
        public Guid Id { get; set; }
        public Guid FontId { get; set; }
        public Guid CategoryId { get; set; }
    }
}
