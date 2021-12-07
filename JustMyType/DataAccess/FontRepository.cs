using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JustMyType.DataAccess
{
    public class FontRepository
    {
        readonly string _connectionString;
        public FontRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("JustMyType");
        }
    }
}
