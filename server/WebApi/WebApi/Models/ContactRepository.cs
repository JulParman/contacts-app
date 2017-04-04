using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ContactRepository : IContactRepository
    {
        private readonly ContactContext _context;
        //Palauttaa kaikki yhteystiedot
        //Tallentaa uuden yhteystiedon
        //Päivittää yhteystiedon
        //Poistaa yhteystiedon

        public ContactRepository(ContactContext context)
        {
            _context = context;
            Add(new ContactItem{ FirstName = "Keijo", LastName = "Testi", Phone = "0404445556", Address = "Saimaantie 3", City = "Lappeenranta" });
            Add(new ContactItem { FirstName = "XXXXX", LastName = "XXXXX", Phone = "0404447979", Address = "Saimaantie 1", City = "Lappeenranta" });
            Add(new ContactItem { FirstName = "Julian", LastName = "Parman", Phone = "0405554556", Address = "Saimaantie 4", City = "Lappeenranta" });
            Add(new ContactItem { FirstName = "Keke", LastName = "Joku", Phone = "0404445256", Address = "Saimaantie 5", City = "Lappeenranta" });
        }
        //Palauttaa kaikki yhteystiedot
        public IEnumerable<ContactItem> GetAll()
        {
            return _context.ContactItems.ToList();
        }
        //Tallentaa uuden yhteystiedon
        public void Add(ContactItem item)
        {
            _context.ContactItems.Add(item);
            _context.SaveChanges();
        }

        public ContactItem Find(long key)
        {
            return _context.ContactItems.FirstOrDefault(t => t.Key == key);
        }
        //Poistaa yhteystiedon
        public void Remove(long key)
        {
            var entity = _context.ContactItems.First(t => t.Key == key);
            _context.ContactItems.Remove(entity);
            _context.SaveChanges();
        }
        //Päivittää yhteystiedon
        public void Update(ContactItem item)
        {
            _context.ContactItems.Update(item);
            _context.SaveChanges();
        }
    }
}
