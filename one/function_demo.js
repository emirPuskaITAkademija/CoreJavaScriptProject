const number1 = "23";
const number2 = 354;

const suma = sum(number1, number2);
console.log(suma);

function sum(n1, n2){
    const result = n1+n2;
    return result;
}

const nizBrojeva = [23, 34, 353, 757, 68, 87, 879];
let zbir = 0;
for(const broj of nizBrojeva){
    zbir = zbir+broj;
}
console.log(zbir);

