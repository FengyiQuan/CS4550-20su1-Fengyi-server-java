function User(username, password, firstName, lastName, role) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;

    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setPassword = setPassword;
    this.getPassword = getPassword;
    this.setFirstName = setFirstName;
    this.getFirstName = getFirstName;
    this.setLastName = setLastName;
    this.getLastName = getLastName;
    this.setRole = setRole;
    this.getRole = getRole;

    var self = this;

    function setUsername(username) {
        self.username = username;
    }

    function getUsername() {
        return self.username;
    }

    function setPassword(pass) {
        self.password = pass;
    }

    function getPassword() {
        return self.password;
    }

    function setFirstName(fname) {
        self.firstName = fname;
    }

    function getFirstName() {
        return self.firstName;
    }

    function setLastName(lname) {
        self.lastName = lname;
    }

    function getLastName() {
        return self.lastName;
    }

    function setRole(role) {
        self.role = role;
    }

    function getRole() {
        return self.role;
    }

}
