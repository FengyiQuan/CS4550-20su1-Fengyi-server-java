(function () {
    let users = [
        {username: 'alice', password: 'alice', first: 'Alice', last: 'Wonderland', role: 'FACULTY'},
        {username: 'bob', password: 'bob', first: 'Bob', last: 'Marley', role: 'FACULTY'},
        {username: 'carl', password: 'carl', first: 'Carl', last: 'Garcia', role: 'STUDENT'}];
    let $usernameFld, $passwordFld;
    let $firstNameFld, $lastNameFld, $roleFld;
    let $removeBtn, $editBtn, $createBtn;
    let $userRowTemplate, $tbody;
    let userService = new AdminUserServiceClient();
    let selectedUser = {};

    function main() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $roleFld = $('#roleFld');

        // $removeBtn=$('wbdv-remove')
        // $editBtn=$('wbdv-update');
        $createBtn = $('.wbdv-create');
        $createBtn.click(createUser);
        $tbody = $('tbody');

        users = findAllUsers();
        for (let i = 0; i < users.length; i++) {
            const username = users[i].username;
            const newUserRow = $('<tr><td>' + username + '</td></tr>');
            $tbody.append(newUserRow)
        }

    }

    function createUser() {
        const username = $usernameFld.val();
        const first = $firstNameFld.val();
        const last = $lastNameFld.val();

        const newUser = {
            username: username,
            first: first,
            last: last
        };
        userService.createUser(newUser)
            .then(function (actualUser) {
                users.push(actualUser);
                renderUsers();
            })
    }

    function findAllUsers() {
        userService.findAllUsers()
            .then(function (allUsers) {
                users = allUsers;
                renderUsers();
            })
    }

    function findUserById() {
    }

    function deleteUser() {

    }

    function selectUser(event) {
        const target = event.currentTarget;
        const $button = $(target);
        const userID = $button.attr('id');
        userService.findUserById(userID)
            .then(function (user) {
                console.log(user);
                renderUser(user);
            })
    }

    function updateUser() {
        const updatedUser = {
            _id: selectedUser._id,
            username: $usernameFld.val(),
            first: $firstNameFld.val(),
            last: $lastNameFld.val()
        };
        userService.updateUser(selectedUser._id, updatedUser)
            .then(function(status) {
                users = users.map(function(user) {
                    if(user._id === selectedUser._id) {
                        return updatedUser;
                    } else {
                        return user;
                    }
                });
            });
    }

    function renderUser(user) {
        selectedUser = user;
        $usernameFld.val(user.username);
        $firstNameFld.val(user.first);
        $lastNameFld.val(user.last);

    }

    function renderUsers(users) {
        const template = $('.wbdv-template')[0];
        const $template = $(template);
        const clone = $template.clone();
        $tbody.empty();
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const copy = clone.clone();
            copy.find('.wbdv-username').html(user.username);
            copy.find('.wbdv-first-name').html(user.first);
            copy.find('.wbdv-last-name').html(user.last);
            copy.find('.wbdv-role').html(user.role);
            copy.find('.wbdv-remove')
                .attr('id', user._id)
                .click(deleteUser);
            copy.find('.wbdv-edit')
                .attr('id', user._id)
                .click(selectUser);
            $tbody.append(copy);
        }
    }

    $(main);
})();
