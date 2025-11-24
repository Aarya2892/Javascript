class User {
   constructor(email, password){
    this.email = email;
    this.password = password;
   }
   get email(){
      return this._email.toUpperCase();
   }
   set email(value){
      this._email = value;
   }
    get password(){
    return `${this._password.toUpperCase()}hitesh`;
   }
   set password(value){
    this._password = value;
   }
}

const one = new User("one@gmail.com", "abfhs");
// console.log(one.password)
// console.log(one.email)









//DefineProperty Old getter and setter

function User1(email, password){
     this._email = email;
     this._password = password;

   Object.defineProperty(this, "email", {
      get: function(){
         return this._email.toUpperCase()
      },
      set: function(value){
         this._email = value;
      }
   })
   Object.defineProperty(this, "password", {
      get: function(){
         return this._password.toUpperCase()
      },
      set: function(value){
         this._password = value;
      }
   })
}

const tryOld = new User1("tryOld@gamil.com", "bfuyb")
// console.log(tryOld.email);
// console.log(tryOld.password)









// Object based - old getter and setter

const User2 = {
   _email: 'objectBased@gamil.com',
   _password: 'fhvhjdf',


   get email(){
      return this._email.toUpperCase();
   },
   set email(value){
      this._email = value
   }
}

const objectBased = Object.create(User2)
console.log(objectBased.email);

