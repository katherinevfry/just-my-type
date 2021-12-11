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

        [HttpPost("/categories/post")]
        public IActionResult AddCategory(Categories newCategory)
        {
            _repo.Add(newCategory);
            return Created($"/categories/post/{newCategory.Id}", newCategory);
        }

        [HttpDelete("/categories/delete/{id}")]
        public IActionResult DeleteCategory(Guid id)
        {
            _repo.Remove(id);

            return Ok();
        }
    }

}
