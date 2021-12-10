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
    public class UserController : ControllerBase
    {

        UserRepository _repo;

        public UserController(UserRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("/user/fbkey")]
        public IActionResult GetFbUser(string fbkey)
        {
            return Ok(_repo.GetUserByFb(fbkey));
        }

        [HttpPost("/user")]
        public IActionResult CreateUser(User newUser)
        {
            _repo.AddUser(newUser);
            return Created($"/user/{newUser.Id}", newUser);
        }
    }
}
