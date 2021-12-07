using Dapper;
using JustMyType.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
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

        internal IEnumerable<Fonts> GetUserFonts(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select * from fonts where userId = @id";

            var userFonts = db.Query<Fonts>(sqlString, new { id });

            return userFonts;
        }
    }
}
