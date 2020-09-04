function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function initNavbar() {
  if (document.getElementById("mySidenav")){
    document.getElementById("mySidenav").addEventListener("click", closeNav);
    document.getElementById("mySidenav").addEventListener("click", openNav);
  }
}

export { initNavbar };
