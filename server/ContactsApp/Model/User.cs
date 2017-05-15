using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsApp.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string PassWord { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public User() { }

        public User(int id, string userName, string passWord, string firstName, string lastName, string email)
        {
            Id = id;
            UserName = userName;
            PassWord = passWord;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
        }

        public User(string userName, string passWord, string firstName, string lastName, string email)
        {
            UserName = userName;
            PassWord = passWord;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
        }
    }
}
