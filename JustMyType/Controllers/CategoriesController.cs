using JustMyType.DataAccess;
using JustMyType.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JustMyType.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        CategoryRepository _repo;

        public CategoriesController(CategoryRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("/users/categories/{userId}")]
        public IActionResult GetUserCategories(Guid userId)
        {
            return Ok(_repo.GetUserCategories(userId));
        }

        [HttpPost]
        public IActionResult AddCategory(Categories newCategory)
        {
            _repo.Add(newCategory);
            return Created($"/api/categories/{newCategory.Id}", newCategory);
        }
    }

}
