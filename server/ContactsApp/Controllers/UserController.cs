using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactsApp.Controllers
{
    [Route("api/user")]
    [Authorize("Bearer")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // PUT api/values/5
        [HttpPut]
        public IActionResult Login()
        {
            var user = _userService.FindUserByUsername(User.Identity.Name);
            return new JsonResult(user);
        }

    }
}
