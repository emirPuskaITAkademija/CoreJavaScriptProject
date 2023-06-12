function showCat() {
    let animalImage = document.getElementById("animal");
    animalImage.src = "imgs/cat.png";
  }

  function showDog() {
    let animalImage = document.getElementById("animal");
    animalImage.src = "imgs/dog.png";
  }

  function hidePicture() {
    let button = document.getElementById("hideShowButton");
    const textInButton = button.innerText;
    let animalImage = document.getElementById("animal");
    if (textInButton == "Sakrij sliku") {
      button.innerText = "Prikazi";
      animalImage.style.display = "none";
    }else{
      button.innerText = "Sakrij sliku";
      animalImage.style.display = "inline";
    }
  }