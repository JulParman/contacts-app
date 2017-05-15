using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using ContactsApp.model;

namespace ContactsApp.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly ContactContext _context;
        public ContactRepository(ContactContext context)
        {
            _context = context;
        }

        public List<Contact> FindAll()
        {
            var contacts = _context.Contact.ToList();
            return contacts;
        }

        public Contact FindById(int id)
        {
            var contact = _context.Contact.FirstOrDefault(c => c.Id == id);
            return contact;
        }

        public void Create(Contact contact)
        {
            _context.Contact.Add(contact);
            _context.SaveChanges();
        }

        public void Update(Contact contact)
        {
            _context.Contact.Update(contact);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
           var contact = _context.Contact.FirstOrDefault(c => c.Id == id);
            if (contact != null)
            {
                _context.Contact.Remove(contact);
                _context.SaveChanges();
            }
            else
            {
                
            }
        }

        

    }
}
