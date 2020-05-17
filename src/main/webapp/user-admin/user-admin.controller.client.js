(function () {
    let users = [];
    let $usernameFld, $passwordFld;
    let $firstNameFld, $lastNameFld, $roleFld;
    let $removeBtn, $editBtn, $updateBtn, $createBtn, $searchBtn;
    let $userRowTemplate, $tbody;
    let userService = new AdminUserServiceClient();
    let selectedUser = {};

    function main() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $roleFld = $('#roleFld');

        // $removeBtn=$('wbdv-remove');
        // $removeBtn.click(deleteUser);
        // $editBtn=$('wbdv-update');
        // $editBtn.click(updateUser);
        const template = $('.wbdv-template')[0];
        $userRowTemplate = $(template).clone();

        $updateBtn = $('.wbdv-update');
        $updateBtn.click(updateUser);
        $createBtn = $('.wbdv-create');
        $createBtn.click(createUser);
        $searchBtn = $('.wbdv-search');
        $searchBtn.click(search);
        $tbody = $('tbody');

        findAllUsers();
    }

    function search() {

    }

    function createUser() {
        const username = $usernameFld.val();
        const password = $passwordFld.val();
        const first = $firstNameFld.val();
        const last = $lastNameFld.val();
        const role = $roleFld.val();

        const newUser = {
            username: username,
            password: password,
            first: first,
            last: last,
            role: role
        };

        userService.createUser(newUser)
            .then(function (actualUser) {
                users.push(actualUser);
                renderUsers();
            });
    }

    function findAllUsers() {
        userService.findAllUsers()
            .then(function (allUsers) {
                users = allUsers;
                renderUsers();
            })
    }

    function deleteUser(event) {
        console.log(event);
        const target = event.currentTarget;
        const $button = $(target);
        const userId = $button.attr('id');
        userService.deleteUser(userId)
            .then(function () {
                users = users.filter(function (user) {
                    return user._id !== userId
                });
                renderUsers();
            });

    }

    function findUserById(event) {
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
            password: $passwordFld.val(),
            first: $firstNameFld.val(),
            last: $lastNameFld.val(),
            role: $roleFld.val()
        };
        userService.updateUser(selectedUser._id, updatedUser)
            .then(function (status) {
                users = users.map(function (user) {
                    if (user._id === selectedUser._id) {
                        return updatedUser;
                    } else {
                        return user;
                    }
                });
                renderUsers();
            });

    }

    function renderUser(user) {
        selectedUser = user;
        $usernameFld.val(user.username);
        $passwordFld.val(user.password);
        $firstNameFld.val(user.first);
        $lastNameFld.val(user.last);
        $roleFld.val(user.role);
    }

    function renderUsers() {
        $tbody.empty();
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const copy = $userRowTemplate.clone();
            copy.find('.wbdv-username').html(user.username);
            copy.find('.wbdv-first-name').html(user.first);
            copy.find('.wbdv-last-name').html(user.last);
            copy.find('.wbdv-role').html(user.role);
            copy.find('.wbdv-remove')
                .attr('id', user._id)
                .click(deleteUser);
            copy.find('.wbdv-edit')
                .attr('id', user._id)
                .click(findUserById);
            copy.removeClass('wbdv-hidden');
            $tbody.append(copy);
        }
    }

    $(main);
})();
