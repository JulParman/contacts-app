using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.model;
using ContactsApp.Model;
using Microsoft.EntityFrameworkCore;

namespace ContactsApp
{
    public class ContactContext : DbContext
    {
        public DbSet<Contact> Contact { get; set; }
        public DbSet<User> User { get; set; }

        public ContactContext(DbContextOptions<ContactContext> options)
            :base(options) { }
    }
}
