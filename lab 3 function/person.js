class person{
    constructor(name, age, email){
        this.name= name;
        this.age= age;              // to store the data
        this.email= email;
    }
    getpersoninfo(){
        return 
        Name: this.name          // to retrieve the data 
        Age: this.age
        Email: this.email
    }
}
module.exports = person;