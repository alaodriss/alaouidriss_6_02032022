async function fetchAllPhotographers() {
    // Récupère les datas des photographes
    const data = await fetch("./data/photographers.json")
      .then((response) => response.json());
     return data.photographers
  }

async function fetchPhotographerById(id){ 
  return fetchAllPhotographers() 
  .then((photographers)=> {   
  return photographers.filter(r => r.id == id);
 
    }) 
  }


async function fetchMediaById(){ 
 // Récupère les datas des media
 const data = await fetch("./data/photographers.json")
 .then((response) => response.json());
return data.media
 
    }
async function fetAllchMediaById(id){ 
 return fetchMediaById()
   .then((media)=> {   
   return media.filter(r => r.id == id); 
   }) 
      }
    