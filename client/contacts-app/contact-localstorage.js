contactsApp.contactLocalStorage = (function () {

    var localStorageKey = 'contacts';
    if (!localStorage.getItem(localStorageKey)) {
        localStorage.setItem(localStorageKey, JSON.stringify([]));
    }

    function writeLocalStorage(contactsArray) {
        var newContact = contactsApp.contacts();
        contactsArray.push(newContact);
        localStorage.setItem(localStorageKey, JSON.stringify(contactsArray));
        location.reload();
    }

    function getLocalStorage() {
        var data = localStorage.getItem(localStorageKey);
        return JSON.parse(data);
    }

    function deleteRow() {
        var data = getLocalStorage();

        var selectedRow = document.querySelector(".is-selected").rowIndex;

        if (selectedRow) {
            data.splice(selectedRow - 1, 1);
        }
        writeLocalStorage(data);
    }

    function updateRow() {
        var data = getLocalStorage();
        var selectedRow = document.querySelector(".is-selected").rowIndex;

        var firstName = document.getElementById('txtfname').value;
        var lastName = document.getElementById('txtlname').value;
        var phone = document.getElementById('txtphone').value;
        var address = document.getElementById('txtaddress').value;
        var city = document.getElementById('txtcity').value;

        if (selectedRow) {

            if (firstName) {
                data[selectedRow - 1].firstName = firstName;
            }
            else if (lastName) {
                data[selectedRow - 1].lastName = lastName;
            }
            else if (phone) {
                data[selectedRow - 1].phone = phone;
            }
            else if (address && city) {
                data[selectedRow - 1].address = address + ', ' + city;
            }
        }
        writeLocalStorage(data);
    }

    return {
        getDataFromLocalStorage: function () {
            return getLocalStorage();
        },
        writeStorage: function (contactsArray) {
            writeLocalStorage(contactsArray);
        },
        deleteRowFromStorage: function () {
            deleteRow();
        },
        updateRowFromStorage: function () {
            updateRow();
        }

    }
})();