using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public interface IContactRepository
    {
        void Add(ContactItem item);
        IEnumerable<ContactItem> GetAll();
        ContactItem Find(long key);
        void Remove(long key);
        void Update(ContactItem item);
    }
}
