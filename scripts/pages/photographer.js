//Mettre le code JavaScript lié à la page photographer.html


// header foreach photographer
function displayPhotographerData(photograph) {
  const PhotographePagerSection = document.querySelector(".photograph_header");
 
  photograph.forEach((person) => {
    const PhotographerPageModel = photographerPageFactory(person);
    const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
    PhotographePagerSection.appendChild(PhotographerDOM);
    console.log(PhotographerDOM);
  });
}

// button sort popularity/title/date
function displaySortImages() {
  const SortButtonSection = document.querySelector(".select-dropdown");
  const buttonSort = sortImagesDOM();
  SortButtonSection.appendChild(buttonSort);
}

function initPhotographer() {
  // Récupère les datas des photographes
  fetch("./data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //Récupère id photographe du URL
      const IDphotographer = new URLSearchParams(
        document.location.search.substring(1)
      );
      const idURL = IDphotographer.get("id");
      console.log(idURL);

      const { photographers } = data;
    

      //filtre photographe avec id
      const Showphotographer = photographers.filter(
        (photographer) => photographer.id == idURL
      );

      // show header photographer
      displayPhotographerData(Showphotographer);

      //show button sort by
      displaySortImages();

    });
}
initPhotographer();