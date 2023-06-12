function prikaziRezultat(rezultat){
    console.log(rezultat);
}

function prikaziInParagraf(result){
    document.getElementById("resultDemo").innerHTML=result;
}

function izracunaj(num1, num2, callback){
    let suma = num1 + num2;
    if(callback){
        callback(suma);
    }
}





function onKlik(){
    izracunaj(23, 34, prikaziInParagraf);
}


izracunaj(43, 34, prikaziRezultat);
izracunaj(43, 34, prikaziRezultat);
izracunaj(23, 34);
