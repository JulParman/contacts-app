contactsApp.getDataFromServer = (function () {

    function writeServer(newContact) {
        $.ajax({
            type: "POST",
            url: 'http://localhost:51057/api/contact',
            data: JSON.stringify(newContact),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                location.reload();
            },
            error: function () {
                alert("Error");
            }
        });

    }

    function deleteContact() {
        try {
            var selectedRowToDelete = document.querySelector(".is-checked").parentNode.parentNode;
            var idDelete = selectedRowToDelete.dataset.key;
            event.preventDefault();
            if (idDelete) {
                $.ajax({
                    type: "DELETE",
                    url: "http://localhost:51057/api/contact/" + idDelete,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 10000,
                    success: function () {
                        location.reload();
                    },
                    error: function () {
                        alert("error");
                    }
                });
            }

        }
        catch (err) {
            alert("Select row before deleting!");
        }
    }

    return {
        getContacts: function (callback) {
            $.ajax({
                url: 'http://localhost:51057/api/contact',
                type: 'Get',
                success: function (data) {
                    callback(data);
                }
            });

        },
        writeToServer: function (newContact) {
            writeServer(newContact);
        },
        deleteToServer: function () {
            deleteContact();
        },
        updateToServer: function () {
            try{
                var rowToUpdate = document.querySelector(".is-checked").parentNode.parentNode;
                var id = rowToUpdate.dataset.key;
                var arrayIndex = id - 1;
                var obj;

                var firstName = document.getElementById('txtfname').value;
                var lastName = document.getElementById('txtlname').value;
                var phone = document.getElementById('txtphone').value;
                var address = document.getElementById('txtaddress').value;
                var city = document.getElementById('txtcity').value;

                if (rowToUpdate) {

                    if (firstName) {
                        contactsArray[arrayIndex].firstName = firstName;
                    }
                    if (lastName) {
                        contactsArray[arrayIndex].lastName = lastName;
                    }
                    if (phone) {
                        contactsArray[arrayIndex].phone = phone;
                    }
                    if (address) {
                        contactsArray[arrayIndex].address = address;
                    }
                    if (city) {
                        contactsArray[arrayIndex].city = city;
                    }
                    obj = JSON.stringify(contactsArray[arrayIndex]);
                    event.preventDefault();
                    $.ajax({
                        url: "http://localhost:51057/api/contact/" + id,
                        type: "PUT",
                        data: obj,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        timeout: 100000,
                        success: function () {
                            location.reload();
                        },
                        error: function () {
                            alert("error");
                        }
                    });

                }
            }
            catch (err)
            {
                alert("Error on update. " + err);
            }

        }

    }
})();