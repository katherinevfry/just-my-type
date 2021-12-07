using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JustMyType.Models
{
    public class Fonts
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Style { get; set; }
        public string Source { get; set; }
        public Guid UserId { get; set; }
    }
}
