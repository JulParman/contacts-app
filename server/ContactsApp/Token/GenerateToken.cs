using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using ContactsApp.Model;
using Microsoft.IdentityModel.Tokens;

namespace ContactsApp.Token
{
    public class GenerateToken
    {
        public static string TokenGeneration(User user)
        {
            var handler = new JwtSecurityTokenHandler();
            var expires = DateTime.Now + TokenAuthOption.ExpiresSpan;

            var identity = new ClaimsIdentity(
                new GenericIdentity(user.Username, "TokenAuth"),
                new[] { new Claim("ID", user.Id.ToString()) }
            );

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenAuthOption.Issuer,
                Audience = TokenAuthOption.Audience,
                SigningCredentials = TokenAuthOption.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }
    }
}
