const niz = ["Rahima", "Greta", "Dejla", "Eldar", `Alden`, "Mirsad", 23];
niz[11]="Daniel";
niz[1] = 2345;
/*for(let i = 0; i<niz.length; i++){
    const element = niz[i];
    console.log(element);
}*/
for(const varijablaPetlje of niz){
    console.log(varijablaPetlje);
}