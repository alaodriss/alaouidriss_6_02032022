//Mettre le code JavaScript lié à la page photographer.html


// header foreach photographer
function displayPhotographerData(photograph) {
  const PhotographePagerSection = document.querySelector(".photograph_header");
 
  photograph.forEach((person) => {
    const PhotographerPageModel = photographerPageFactory(person);
    const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
    PhotographePagerSection.appendChild(PhotographerDOM);
    // console.log(PhotographerDOM);
  });
}

// button sort popularity/title/date
function displaySortImages() {
  const SortButtonSection = document.querySelector(".select-dropdown");
  const buttonSort = sortImagesDOM();
  SortButtonSection.appendChild(buttonSort);
}


function displayPortfolio(photograph) {
  const   portfolioUserPagerSection = document.querySelector(".portfolio-user"); 
  // console.log(portfolioUserPagerSection)
  photograph.forEach(() => {
    const portfolioUserPageModel = projectsPhotographer();
    const portfolioUserDOM = portfolioUserPageModel.portfolioUser();
    portfolioUserPagerSection.appendChild(portfolioUserDOM);
    // console.log(PhotographerDOM);
  });
}
// display images by photographer
function displayMediaData(x) {
  const MediaSection = document.querySelector(".portfolio-user");

  
  // create mediaSection
  x.forEach(() => {
    const MediaModel = projectsPhotographer();
    const MediaDOM = MediaModel.MediaDOM();
    MediaSection.appendChild(MediaDOM);

    console.log(MediaSection)
  });
}
function initPhotographer() {
  //Récupère id photographe du URL
  const IDphotographer = new URLSearchParams(
    document.location.search.substring(1)
  );

  const idURL = IDphotographer.get("id");
  fetchPhotographerById(idURL)
    .then((photographer) => {

      // const { photographers } = data;
      // const { media } = data;
      // show header photographer
      displayPhotographerData(photographer);
   
    });

     // show header fliter  
       displaySortImages();


  const idURLmedia = IDphotographer.get("id");
  fetchMediaById(idURLmedia)
    .then((media) => {

      // const { photographers } = data;
      // const { media } = data;
      // show header photographer
      displayMediaData(media);
   
    });


      //  //filtre media avec id
      //  const ShowMediaphototgrapher = media.filter(
      //   (media) => media.photographerId == idURL
      // );
      // displayMediaData(ShowMediaphototgrapher);
}
initPhotographer();