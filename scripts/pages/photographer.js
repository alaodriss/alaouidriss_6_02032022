//Mettre le code JavaScript lié à la page photographer.html


// header foreach photographer
function displayPhotographerData(photograph) {
    const PhotographerSection = document.querySelector( ".photograph_header");
  
    photograph.filter((person) => {
      const PhotographerPageModel = photographerPageFactory(person);
      const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
      PhotographerSection.appendChild(PhotographerDOM);
    });
  }
  