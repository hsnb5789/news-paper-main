const menuImg = document.querySelector(".nav-container picture img");
const navList = document.querySelector(".nav-container .nav-list");
const menu = document.querySelector(".nav-container");
const forBlur = document.querySelectorAll(".bg");

let isMenuVisible = false;
 
const displayMenu = () => {
  navList.style.display = isMenuVisible ? "none" : "flex"; 
  menuImg.src = `./assets/images/icon-menu${isMenuVisible ? "" : "-close"}.svg`;
  if (isMenuVisible) {
    forBlur.forEach((element) => { 
      element.style.filter = "blur(0)";
     element.style.pointerEvents = "auto";
     }); } 
     else { forBlur.forEach((element) => { element.style.filter = "blur(2px)";
     element.style.pointerEvents = "none";});}
  
  isMenuVisible = !isMenuVisible; 
}; 

menuImg.addEventListener("click", () => { 
    displayMenu(); 
})



