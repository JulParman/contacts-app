contactsApp.printContacts = (function () {
    //var data = [];
    function getContactFromArray(data) {
        //var data = contactsApp.contactLocalStorage.getDataFromLocalStorage();

        var newRow = '';
        var nro = 0;
        for (var i = 0; i < data.length; i++) {
            newRow += "<tr data-key='" + data[i].key + "' id='" + nro + "'>" + "<td><label class='mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect' for='checkbox-" + nro + "'>" +
                "<input type='checkbox' id='checkbox-" + nro + "' class='mdl-checkbox__input' />" +
                "<span class='mdl-checkbox__label'></span>" + "</label></td>" +
                "<td>" + data[i].firstName + "</td>" +
                "<td>" + data[i].lastName + "</td>" +
                "<td>" + data[i].phone + "</td>" +
                "<td>" + "<a target='_blank' href='https://www.google.com/maps/place/" + data[i].address + ", " + data[i].city + "'>" + data[i].address + ", " + data[i].city + "</a>" + "</td></tr>";
            //"<td>" + "<a target='_blank' href='https://www.google.com/maps/place/" + data[i].address + "'>" + data[i].address + "</a>" + "</td></tr>";
            nro++;
        }
        var tableElement = document.getElementById('utable');
        tableElement.innerHTML = newRow;
        componentHandler.upgradeDom();

    }

    return {
        printContactsFromArray: getContactFromArray
    }
})();
