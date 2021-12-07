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
    public class CategoryFontsRepository
    {
        readonly string _connectionString;
        public CategoryFontsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("JustMyType");
        }

        public IEnumerable<CategoriesFonts> GetCategoriesFontsByCategoryId(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select * from categoriesFonts where categoryId = @id";

            var userCategoriesFonts = db.Query<CategoriesFonts>(sqlString, new { id });

            return userCategoriesFonts;
        }

        internal void Add(CategoriesFonts newCategoryFont)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"insert into categoriesFonts(fontId, categoryId)
                                                output inserted.id
                                                values(@fontId, @categoryId)";
            var id = db.ExecuteScalar<Guid>(sqlString, newCategoryFont);
            newCategoryFont.Id = id;

        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"delete from categoriesFonts where id = @id";

            db.Execute(sqlString, new { id });
        }
    }
}
