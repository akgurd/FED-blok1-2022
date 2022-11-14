 var cookies = document.querySelector("main > button");
 var popUp = document.querySelector("aside");
 var kruisje = document.querySelector("aside button");

function addPopup() {
    popUp.classList.add("show");
    console.log("mops");

  } 
  cookies.addEventListener("click", addPopup);
  
  
  function removePopup() {
    popUp.classList.remove("show");
  } 
  kruisje.addEventListener("click", removePopup);


// function addPopup() {
//     // popUp.classList.add("show");//classlists toevoegen als het nu geopend wordt
//     popUp.style.display = "block";
//     console.log("mops");

//   } 
//   cookies.addEventListener("click", addPopup);
  
  
//   function removePopup() { //classlists verwijderen als het nu geopend wordt
//     // popUp.classList.remove("show");
//     popUp.style.display = "none";
//   } 
//   popUp.addEventListener("click", removePopup);
