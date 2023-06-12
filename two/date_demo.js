class Person {
  constructor(name, surname, age, birthday) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.birthday = birthday;
  }
}

const datumRođenja = new Date("1995-09-12");
console.log(datumRođenja.getFullYear());
const trenutniDatum = new Date();
console.log(trenutniDatum.getFullYear() - datumRođenja.getFullYear());
console.log(datumRođenja.getTime());
console.log(trenutniDatum.getTime());
const periodMiliseconds = trenutniDatum.getTime() - datumRođenja.getTime();
console.log(periodMiliseconds);
console.log(periodMiliseconds / 1000 / 60 / 60 / 24);
//trenutniDatum.getTime() --> System.currentTime

function getYearDiff(date1, date2) {
  return Math.abs(date2.getFullYear() - date1.getFullYear());
}

function getYearDiffWithMonth(startDate, endDate) {
  const razlikaMiliseconds = endDate.getTime() - startDate.getTime();

  const date = new Date(razlikaMiliseconds);

  //JavaScript skladišti broj milisekundi od Januara 01 1970
  //Nulto vrijeme Januar 01 1970 00:00:00UTC
  //Jedan dan ima 24*60*60*1000
  return Math.abs(date.getUTCFullYear() - 1970);
}


console.log(new Date().toISOString());

const years = getYearDiffWithMonth(datumRođenja, trenutniDatum);
console.log(years);
