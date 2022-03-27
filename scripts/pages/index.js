
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
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
          const { photographers } = data;
      
          displayData(data);

        });
    }
    
    
    init();


    