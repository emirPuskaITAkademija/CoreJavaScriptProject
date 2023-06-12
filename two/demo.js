const niz = [23, "Mirsad", 234, "Greta", "Dejla", 1234, new Date()];
for(let i = 0; i<niz.length; i++){
    const elementNiza = niz[i];//indeksirana
    console.log(elementNiza);
}

class Person{
    constructor(name, surname, age, birthday){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.birthday = birthday;
    }
}

const person = new Person("Alden", "Efendić", 0, new Date());

const person3 = {
    name:"Mirsad", 
    surname: "Škandro", 
    id: 234,
    fullName: function(){
        return this.name +"  " + this.surname;
    }
}
console.log(person3.fullName());

console.log(person.name);
console.log(person["name"]);
console.log(person["birthday"]);


const dejla = new Person("Dejla", "Šarić", 0, new Date("1996-01-01"));
