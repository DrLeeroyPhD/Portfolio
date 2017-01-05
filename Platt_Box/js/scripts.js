var mobileMenu = document.querySelector("#mobileMenu");
var menu = document.querySelector("#sidebar");
var menuIsOpen = false;


mobileMenu.onclick=function(){
  if(menuIsOpen == false){
    menu.style.display = "block";
    menu.style.marginRight = "0";
    mobileMenu.style.backgroundImage = "url(../svg/cancel.svg)";
    menuIsOpen = true;
  } else{
    menu.style.display = "none";
    menu.style.marginRight = "-800px";
    mobileMenu.style.backgroundImage = "url(../svg/menu.svg)";
    menuIsOpen = false;
  }
};