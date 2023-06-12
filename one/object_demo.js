class Person{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

let person = new Person();
person.name = "Mirsad";
console.log(person.name);


const animal = {
    name:"Cicko", 
    surname: "Mačak", 
    age: 13
};
animal.surname = "Mačor";
console.log(animal.surname);

let anotherVariable;
console.log(typeof "Vic o Muji i Sulji");
console.log(typeof 23);
console.log(typeof anotherVariable);
console.log(typeof person);