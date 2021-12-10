using Dapper;
using JustMyType.Models;
using Microsoft.Extensions.Configuration;
using RestSharp;
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

        internal void Add(Fonts newFont)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"insert into fonts(name, style, source, userId)
                                                output inserted.id
                                                values(@name, @style, @source, @userId)";
            var id = db.ExecuteScalar<Guid>(sqlString, newFont);
            newFont.Id = id;
        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            //first delete the font Categories
            var categoriesFontsQuery = @"Delete From categoriesFonts Where fontId = @id";

            db.Execute(categoriesFontsQuery, new { id });
 
            var sql = @"Delete From Fonts Where Id = @id";

            db.Execute(sql, new { id });
        }

        //internal IRestResponse GoogleFonts()
        //{

        //    var client = new RestClient("https://www.googleapis.com/");

        //    var request = new RestRequest("webfonts/v1/webfonts?key=AIzaSyBQvsOQ85vFGS7UqDJKAjVWOrtcPtVc4Dw", Method.GET);

        //    var response = client.Execute(request);

        //    return response;
        //}
    }
}
