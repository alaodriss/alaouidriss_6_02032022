function MediaPageFactory(data){
    const { id, photographerId, video, title, image, likes, date, price, alt } = data ;

    const catalog = `./assets/photographers/${photographerId}/${image}`; 



    //liste media selon id 
    function MediaDOM(){
         const $wrapper = document.createElement("div");
         $wrapper.classList.add('photograph-catalog-card"');
    }   

}