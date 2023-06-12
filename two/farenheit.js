function convertToFarenheit(){
    //window.alert("Neko pušta glasnu muziku u kampusu...");
    //IMPERATIVNI NAČIN
    console.log("TEST TEST");
    let inputElement = document.getElementById("tempInput");
    
    console.log(inputElement.value); 
    const inputInCelsius = parseInt(inputElement.value);
    const resultInFarenheit = (5/9)* (inputInCelsius-32);
    const resultParagrafElement = document.getElementById("resultParagraf");
    resultParagrafElement.innerHTML = resultInFarenheit;
}

