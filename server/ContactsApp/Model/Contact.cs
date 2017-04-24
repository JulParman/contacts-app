namespace ContactsApp.model
{
    public class Contact
    {
        public Contact(int id, string firstName, string lastName, string phone, string address, string city)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            Address = address;
            City = city;
        }

        public int Id { get; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string City { get; set; }
    }
}
