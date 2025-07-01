class User {
    constructor() {
        // Don't initialize properties here
    }

    // Setter for userName
    set userName(name) {
        if (name.length < 3) {
            console.log("Username must be at least 3 characters.");
        } else {
            this._userName = name;
        }
    }

    // Getter for userName
    get userName() {
        return this._userName?.toUpperCase(); // optional chaining to avoid undefined error
    }

    // Setter for password
    set password(pw) {
        if (pw.length < 6) {
            console.log("Password must be at least 6 characters.");
        } else {
            this._password = pw;
        }
    }

    // Getter for password
    get password() {
        return "*".repeat(this._password?.length || 0);
    }
}


const user1 = new User();

user1.userName = "Anvith";       // ✅ uses setter
user1.password = "secure123";    // ✅ uses setter

console.log(user1.userName);     // ANVITH
console.log(user1.password);     // *********
