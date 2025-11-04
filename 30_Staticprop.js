class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`User Name ${this.username}`);
    }
    // static is restricted 
    static createId(){
        return `123`
    }
}

const Nike = new user("Piku")
// console.log(Nike.createId());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Puma = new Teacher("Puma", "one@gmail.com")
Puma.logMe();
// console.log(Puma.createId());


