getId = (idname) => {
  return document.getElementById(idname);
};
var navOpen = getId("navOpen");
var navClose = getId("navClose");
var navbar = getId("nav");
var logOpen = getId("cDropdown");
var logMenu = getId("cDropdownmenu");
logMenu.classList.add("displayNone");
navbar.classList.add("displayNone");
var Open = false;
navOpen.addEventListener("click", function () {
  var cOpen = !Open;
  Open = cOpen;
  console.log(cOpen);
  if (cOpen == true) {
    navbar.classList.remove("displayNone");
    navbar.classList.add("displayFlex");
    navbar.classList.add("display");
  } else {
    navbar.classList.add("displayNone");
    navbar.classList.remove("displayFlex");
    navbar.classList.remove("display");
  }
});
var logoutDis = false;
logOpen.addEventListener("click", function () {
  var logDis = !logoutDis;
  logoutDis = logDis;
  console.log(logoutDis);
  if (logDis == true) {
    logMenu.classList.remove("displayNone");
    logMenu.classList.add("display");
  } else {
    logMenu.classList.remove("display");
    logMenu.classList.add("displayNone");
  }
});
