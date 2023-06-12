function convertToCelsius() {
  const inputFarenheitHtmlElement = document.getElementById("inputFarenheit");
  const inputNumber = parseInt(inputFarenheitHtmlElement.nodeName);
  const result = (5 / 9) * (inputNumber - 32);
  alert(result);
}
