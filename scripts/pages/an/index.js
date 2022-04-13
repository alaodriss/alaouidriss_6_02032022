
    async function displayData(x) {
        const photographersSection = document.querySelector(".photographer_section");

        x.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM)
           console.log(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        fetchAllPhotographers()
        .then((data) => {
          displayData(data);
        });
    }
    
    
    init();


    