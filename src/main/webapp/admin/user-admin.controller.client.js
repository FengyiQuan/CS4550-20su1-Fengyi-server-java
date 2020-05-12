(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() { …
    }

    function createUser() {
        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();
        var role = $('#roleFld').val();
    }

    function findAllUsers() { …
    }

    function findUserById() { …
    }

    function deleteUser() { …
    }

    function selectUser() { …
    }

    function updateUser() { …
    }

    function renderUser(user) { …
    }

    function renderUsers(users) { …
    }
})();
