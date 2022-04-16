




let form = document.querySelector("#cadreForm");

//////////////////////////////Prenom/////////////////////////////////

//Ecouter la modification.

form.first.addEventListener('change',function(){
  validPrenom(this);
});

const validPrenom = function(prenomElt){
  let prenom = prenomElt.value;
  // Creation de de la regxp pour valide le prenom;
  let prenomRegExp = new RegExp("^[a-zA-Z]{2,}$");
  let msgErreurPrenom = document.getElementById("first_error");
  
  // le message d'erreur doit etre vide à chaque validation à chaque click sur le boutton C'est parti.
  msgErreurPrenom.textContent = ""; 

  // annuler le border.
  prenomElt.dataset.errorVisible = "false"; 

  if (prenomRegExp.test(prenom) === false) {
    msgErreurPrenom.textContent = "Saisissez un prénom qui contient au moins deux caractères alphabétiques";
    prenomElt.dataset.errorVisible = "true";
    return false;
  }

  return true;

}
//////////////////////////////Nom////////////////////////////


form.last.addEventListener('change',function(){
  validNom(this);
});

const validNom = function(nomElt){
  let nom = nomElt.value;
  // Creation de de la regxp pour valide le prenom;
  let nomRegExp = new RegExp("^[a-zA-Z]{2,}$");
  // message de erreur 
  let msgErreurNom = document.getElementById("last_error");

  msgErreurNom.textContent = "";
  //border de erreur 
  nomElt.dataset.errorVisible = "false";

  if (nomRegExp.test(nom) === false) {
    //représente le contenu textuel 
    msgErreurNom.textContent = "Saisissez un nom qui contient au moins deux caractères alphabétiques";
     //border de valide
    nomElt.dataset.errorVisible = "true";
    return false;
  }
  // quand utilisateur respecte les condtions  
  return true;
}

//////////////////////////////Mail////////////////////////////

// 
form.email.addEventListener('change',function(){
  validEmail(this);
});

const validEmail = function(emailElt){
 let email = emailElt.value;
  // Creation de de la regxp pour valide mail;
  let emailRegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  let msgErrorEmail = document.getElementById("email_error");

  msgErrorEmail.textContent = "";
    emailElt.dataset.errorVisible = "false";
  
    if (emailRegExp.test(email) === false) {
      msgErrorEmail.textContent = "Saisissez une adresse électronique valide";
      emailElt.dataset.errorVisible = "true";
      return false;
    }
    return true;
  }


  // function de validation de formilaire 

  function validate(form) {
    let isValidatePrenom = validPrenom(form.first);
    let isValidateNom = validNom(form.last);
    let isValidateEmail = validEmail(form.email);
  
    
    return (isValidatePrenom && isValidateNom && isValidateEmail );
     }


    
  //Ecouter la modification de  submit 

form.addEventListener('submit',function(event){
  event.preventDefault();
  console.log(event);
  if (validate(this)){
    
    form.reset();

    closeModal();
    openConfirmationMessage();
  } else{
  
  }


});


/** get id with name */

function contactFormFactory(data) {
  const { name, id } = data;
function contactFormDOM() {
  const $wrapper = document.createElement("div");
  // $wrapper.classList.add("modal");
  $wrapper.setAttribute("aria-label", "image closeup view");

  let cardForm = "";

  cardForm += `

      <div class="modal_name" tabindex="0">${name}</div> 
`;

  $wrapper.innerHTML = cardForm;
  return $wrapper;
}
return { name, id, contactFormDOM };

}