using JustMyType.DataAccess;
using JustMyType.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JustMyType.Controllers
{
    [Route("api/fonts")]
    [ApiController]
    public class FontController : ControllerBase
    {
        FontRepository _repo;

        public FontController(FontRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("/users/fonts/{userId}")]
        public IActionResult GetUserFonts(Guid userId)
        {
            return Ok(_repo.GetUserFonts(userId));
        }

        [HttpPost]
        public IActionResult AddFont(Fonts newFont)
        {
            _repo.Add(newFont);
            return Created($"/api/fonts/{newFont.Id}", newFont);
        }
    }
}
