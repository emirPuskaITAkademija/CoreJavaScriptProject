const fetch = require('node-fetch');

//Fetchati podatke
const promise = fetch('http://localhost:8080/organization-1.0-SNAPSHOT/api/towns');
promise.then(callbackOnResponse);

function callbackOnResponse(response){
    console.log(response);
}