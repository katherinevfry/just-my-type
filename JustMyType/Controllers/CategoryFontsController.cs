﻿using JustMyType.DataAccess;
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
    public class CategoryFontsController : ControllerBase
    {
        CategoryFontsRepository _repo;

        public CategoryFontsController(CategoryFontsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("/categoryFonts/{categoryId}")]
        public IActionResult GetUserCategories(Guid categoryId)
        {
            return Ok(_repo.GetCategoriesFontsByCategoryId(categoryId));
        }

        [HttpPost]
        public IActionResult AddCategory(CategoriesFonts newCategoryFont)
        {
            _repo.Add(newCategoryFont);
            return Created($"/api/categoryFonts/{newCategoryFont.Id}", newCategoryFont);
        }

        [HttpDelete("/delete/{id}")]
        public IActionResult RemoveFontFromCategory(Guid id)
        {
            _repo.Remove(id);

            return Ok();
        }
    }
}
