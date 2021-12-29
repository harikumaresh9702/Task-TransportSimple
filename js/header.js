getId = (idname) => {
  return document.getElementById(idname);
};
var navOpen = getId("navOpen");
var navClose = getId("navClose");
var navbar = getId("nav");
navbar.classList.add("displayNone");
var Open = false;
navOpen.addEventListener("click", function () {
  var Copen = !Open;
  Open = Copen;
  console.log(Copen);
  if (Copen == true) {
    navbar.classList.remove("displayNone");
    navbar.classList.add("displayFlex");
    navbar.classList.add("display");
  } else {
    navbar.classList.add("displayNone");
    navbar.classList.remove("displayFlex");
    navbar.classList.remove("display");
  }
});
