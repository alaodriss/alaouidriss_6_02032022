function photographerPageFactory(dataPage) {
  const { id, name, portrait, city, country, tagline, alt } = dataPage;

  const picturePage = `./assets/photographers/PhotographersID/${portrait}`;

  console.log( picturePage);
  function PhotographerHeaderDOM() {
    const $blockUserHeader = document.createElement("div");
    $blockUserHeader.classList.add("photograph_header");
    $blockUserHeader.classList.add(id);

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
      

    $blockUserHeader.innerHTML = photographerCard;
    return $blockUserHeader;
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