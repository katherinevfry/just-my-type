using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JustMyType.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string FirebaseKey { get; set; }
        public string FullName { get; set; }
    }
}
