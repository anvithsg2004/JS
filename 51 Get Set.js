class User {
    constructor(userName, password) {
        this._userName = userName // using `_` to indicate "private"
        this._password = password
    }

    // Getter for userName
    get userName() {
        return this._userName.toUpperCase();  // e.g., formatting
    }

    // Setter for userName
    set userName(newName) {
        if (newName.length < 3) {
            console.log("Username must be at least 3 characters long.");
        } else {
            this._userName = newName;
        }
    }

    // Getter for password
    get password() {
        return "*".repeat(this._password.length); // mask password
    }

    // Setter for password
    set password(newPass) {
        if (newPass.length < 6) {
            console.log("Password must be at least 6 characters.");
        } else {
            this._password = newPass;
        }
    }

}
