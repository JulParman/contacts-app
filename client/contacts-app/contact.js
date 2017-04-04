contactsApp.contacts = function () {
    var firstName = document.getElementById('txtfname').value;
    var lastName = document.getElementById('txtlname').value;
    var phone = document.getElementById('txtphone').value;
    var address = document.getElementById('txtaddress').value;
    var city = document.getElementById('txtcity').value;

    return {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address,
        city: city
    }
};