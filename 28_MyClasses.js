// ES6

class User{
    constructor(userName, email, password){
         this.userName = userName;
         this.email = email;
         this.password = password
    }
    encryptPassword(){
        return `${this.password}abcd`
    }
    changeUsername(){
        return `${this.userName.toUpperCase()}`
    }
}

const one = new User("lio", "one@gmail.com", "2025")
// console.log(one.encryptPassword());
// console.log(one.changeUsername())


// Behind the scene

function user(userName, password, email){
         this.userName = userName;
         this.email = email;
         this.password = password;
}

user.prototype.changeuserName = function(){
    return `${this.userName.toUpperCase()}`
}

const Two = new user("cookie", 456, "two@gmail.com")
console.log(Two.changeuserName());