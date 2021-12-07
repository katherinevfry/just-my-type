using JustMyType.DataAccess;
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
        public IActionResult GetUserFonts(Guid id)
        {
            return Ok(_repo.GetUserFonts(id));
        }
    }
}
