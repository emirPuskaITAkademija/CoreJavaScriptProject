const baseUrl = "http://localhost:8080";

//Methodu koju ćemo zvati na promjenu stranice .. page=1  and pageSize=5,10,15,20
//filmovi na page=1 su ok ali moramo znati koliko imamo i ukupno totalPages
function loadPage(page, pageSize) {
  const adresa = `${baseUrl}/api/film?page=${page}&pageSize=${pageSize}`;
  const zahtjev = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  //async ajax poziv
  const obecanje = fetch(adresa, zahtjev); //Promise<Response>
  obecanje
    .then((response) => response.json())
    .catch((error) => alert(error))
    .then(handlePageData)
    .catch((error) => alert(error));
}

function handlePageData(pageData) {
  console.log(pageData.content);
  addFilmsToTableBody(pageData.content);
  console.log(pageData.totalPages);
  createPagination(pageData.totalPages);
}

function addFilmsToTableBody(films) {
  const tableBodyElement = document.querySelector("#data-table tbody");
  tableBodyElement.innerHTML = "";
  for (let film of films) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${film.id}</td>
            <td>${film.title}</td>
            <td>${film.description}</td>
            <td>${film.releaseYear}</td>
            <td>${film.length}</td>
            <td>${film.rating}</td>
            <td>${film.specialFeatures}</td>
        `;
    tableBodyElement.appendChild(row);
  }
}
const numberOfShownPageButtons = 10;
let start;
let end;
function createPagination(totalPages) {
  const paginationDiv = document.getElementById("paginationDiv");
  paginationDiv.innerHTML = "";
  start = start ? start : 1;
  end = end ? end : numberOfShownPageButtons;
  //<<
  if (start > numberOfShownPageButtons) {
    const leftArrowLink = document.createElement("a");
    leftArrowLink.textContent = "<<";
    leftArrowLink.addEventListener("click", () => {
      start = start - numberOfShownPageButtons;
      end = start + numberOfShownPageButtons-1;
      createPagination(totalPages);
    });
    paginationDiv.appendChild(leftArrowLink);
  }

  for (let i = start; i <= end; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.textContent = i;
    pageLink.addEventListener("click", () => {
      loadPage(i - 1, pageSizeInputElement.value);
    });
    paginationDiv.appendChild(pageLink);
  }
  //  >>
  if (end < totalPages) {
    const rightArrowLink = document.createElement("a");
    rightArrowLink.textContent = ">>";
    rightArrowLink.addEventListener("click", () => {
      start = start + numberOfShownPageButtons;
      end = end + numberOfShownPageButtons;
      end = totalPages < end ? totalPages : end;
      createPagination(totalPages);
    });
    paginationDiv.appendChild(rightArrowLink);
  }
}

const pageSizeInputElement = document.getElementById("pageSizeInput");
pageSizeInputElement.addEventListener("change", () => {
  loadPage(0, pageSizeInputElement.value);
});
loadPage(0, pageSizeInputElement.value);
