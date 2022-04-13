//Mettre le code JavaScript lié à la page photographer.html


// header foreach photographer
function displayPhotographerData(photograph) {
    const PhotographePagerSection = document.querySelector(".photograph-header");
   
    photograph.forEach((person) => {
      const PhotographerPageModel = photographerPageFactory(person);
      const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
      PhotographePagerSection.appendChild(PhotographerDOM);
      console.log(PhotographerDOM);
    });
  }


  // button formContact 
function nameUserContact(dataFrom) {
  const contactFrom = document.querySelectorAll(".nameUser");

  dataFrom?.forEach(() => {
    const idUserName = nameUserContact();
  const nameUserform = idUserName.nameUserContactDOM();
  contactFrom.appendChild(nameUserform);
    });

    console.log(contactFrom)
}
// button sort popularity/title/date
function displaySortImages() {
  const SortButtonSection = document.querySelector(".select-dropdown");
  // const buttonSort = sortMedia();
  SortButtonSection.appendChild(sortMedia());
}

// display images by photographer
function displayMediaData(mediasphotographer, filterBy) {
  const MediaSection = document.querySelector(".photograph-catalog-cards");

  let mediasphotographerFiltered = null;

  //  filter medias by type
  mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
    return a.likes - b.likes;
  });

  if (filterBy === "popularity") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      return a.likes - b.likes;
    });
  }
  if (filterBy === "title") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  if (filterBy === "date") {
    mediasphotographerFiltered.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  } 


  // create mediaSection
  MediaSection.innerHTML = "";
  mediasphotographerFiltered.forEach((media) => {
    const MediaModel = MediaPageFactory(media);
    const MediaDOM = MediaModel.MediaDOM();
    MediaSection.appendChild(MediaDOM);
  });

  console.log(mediasphotographerFiltered)
}



function init() {
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
  
      const { photographers } = data;
      const { media } = data;
  
      //filtre photographe avec id
      const Showphotographer = photographers.filter(
        (photographer) => photographer.id == idURL
      );
  
      // show header photographer
      displayPhotographerData(Showphotographer);

       // show trier medias
      displaySortImages()

      
      const ShowMediaphototgrapher = media.filter(
        (medias) => medias.photographerId == idURL
      );


        // show header medias
        displayMediaData(ShowMediaphototgrapher);


        const sortByType = document.getElementById("select_images");

        //change orientation arrow buttom sort by popularity/date/title
        sortByType.addEventListener("click", () => {
          const arrowUpDown = document.querySelector(".arrow-down");
          arrowUpDown.classList.toggle("rotated");
        });
  
        sortByType.addEventListener("change", (e) => {
          if (e.target.value === "popularity") {
            displayMediaData(ShowMediaphototgrapher, "popularity");
          }
          if (e.target.value === "date") {
            displayMediaData(ShowMediaphototgrapher, "date");
          }
          if (e.target.value === "title") {
            displayMediaData(ShowMediaphototgrapher, "title");
          }
        });

        
      
    });
    nameUserContact()

};

init();
