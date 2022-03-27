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
  //Récupère id photographe du URL
  const IDphotographer = new URLSearchParams(
    document.location.search.substring(1)
  );

  const idURL = IDphotographer.get("id");
  fetchPhotographerById(idURL)
    .then((photographer) => {

      // show header photographer
      displayPhotographerData(photographer);
        
   

    });
}
initPhotographer();