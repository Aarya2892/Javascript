class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`User name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addcourse(){
        console.log(`New course added by ${this.username}`);
    }
}

const firstUser = new Teacher("Piku", "one@gmail.com", "234")
firstUser.addcourse();


const secondUser = new User("Chikoo", "two@gmail.com", "456")
// secondUser.addcourse();
secondUser.logMe();
firstUser.logMe();

console.log(firstUser instanceof Teacher)
console.log(firstUser instanceof User);
console.log(secondUser instanceof User);
console.log(secondUser instanceof Teacher);

