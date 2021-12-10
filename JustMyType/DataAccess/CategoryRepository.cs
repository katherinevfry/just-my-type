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
    public class CategoryRepository
    {
        readonly string _connectionString;
        public CategoryRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("JustMyType");
        }

        internal IEnumerable<Categories> GetUserCategories(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select * from categories where userId = @id";

            var userCategories = db.Query<Categories>(sqlString, new { id });

            return userCategories;
        }

        internal void Add(Categories newCategory)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"insert into categories(title, userId)
                                                output inserted.id
                                                values(@title, @userId)";
            var id = db.ExecuteScalar<Guid>(sqlString, newCategory);
            newCategory.Id = id;
        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            //first delete the font Categories
            var categoriesFontsQuery = @"Delete From categoriesFonts Where categoryId = @id";

            db.Execute(categoriesFontsQuery, new { id });

            var sql = @"Delete From categories Where Id = @id";

            db.Execute(sql, new { id });
        }

    }
}
