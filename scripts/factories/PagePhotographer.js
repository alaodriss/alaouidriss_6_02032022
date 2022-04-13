function photographerPageFactory(data) {
    const { id, name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function PhotographerHeaderDOM() {
        
        const $User = document.createElement( 'div' );
        $User.classList.add("photographer_UserHeader");
        $User.classList.add(id);
  
        const photographUser = `
          <div class="photographer_user">
            <h2>${name}</h2>
            <img src="${picture}" alt="">
          </div>

        <div class="photographer_infouser" tabindex="0">
          <p class="city">${city + ", " + country}</p>
          <p class="tagline">${tagline}</p>
        </div>
        `;
    
        $User .innerHTML = photographUser;
    
        return  $User ;
    }
    return {id, name, portrait, city, country, tagline, PhotographerHeaderDOM }
}