using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using ContactsApp.Controllers.Communication;
using ContactsApp.Model;
using ContactsApp.Services;
using ContactsApp.Token;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactsApp.Controllers
{
    [Route("api/authentication")]
    public class TokenAuthController : Controller
    {
        private readonly IUserService _userService;

        public TokenAuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthRequest authRequest)
        {
            var user = _userService.FindUserByUsernameAndPassword(authRequest.Username, authRequest.Password);
            if (user == null) return new UnauthorizedResult();
            var token = GenerateToken.TokenGeneration(user);
            return new JsonResult(new AuthResponse(user.Id.ToString(), token));
        }
    }
}
