function photographerPageFactory(dataPage) {
    const { id, name, portrait, city, country, tagline, alt } = dataPage;
  
    const picturePage = `./assets/photographers/PhotographersID/${portrait}`;
    console.log(picturePage);
    function PhotographerHeaderDOM() {
      const $wrapperHeader = document.createElement("div");
      $wrapperHeader.classList.add("photograph_header");
      $wrapperHeader.classList.add(id);
  
      const photographerCard = `
      <div class="photograph-info">
      <div class=photograph-name tabindex="2">
        <h1>${name}</h1>
      </div>
      <div class="photograph-txt" tabindex="2">
        <h2>${city}, ${country}</h2>
        <p>${tagline}</p>
      </div>
  </div>
    <div class="photograph-img" tabindex="2">
      <img src="${picturePage}" s/>
    </div>  
          `;
  
      $wrapperHeader.innerHTML = photographerCard;
      return $wrapperHeader;
    }
  
    return {
      id,
      name,
      portrait,
      city,
      country,
      tagline,
      alt,
      PhotographerHeaderDOM,
    };
  }