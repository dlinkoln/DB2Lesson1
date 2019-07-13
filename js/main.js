window.onload = function() {
  var menuBtn = document.getElementById("burger");
  var menuSidebar = document.getElementById("sidebar");
  var breadcrumbs = document.getElementById("bread");
  var burgerBox = document.getElementById("burger-box");
  var menuBurgerClosed = "burger closed";
  var menuBurgerOpened = "burger opened";
  var menuSidebarClosed = "sidebar closed";
  var menuSidebarOpened = "sidebar opened";

  menuBtn.onclick = function() {
    if (menuBtn.className == menuBurgerClosed) {
      menuBtn.className = menuBurgerOpened;
      menuSidebar.className = menuSidebarOpened;
      breadcrumbs.style.paddingLeft = "80px";
      burgerBox.style.left = "50px";
      console.log(breadcrumbs);
      console.log(burgerBox);
    } else if (menuBtn.className == menuBurgerOpened) {
      menuBtn.className = menuBurgerClosed;
      menuSidebar.className = menuSidebarClosed;
      breadcrumbs.style.paddingLeft = "60px";
      burgerBox.style.left = "10px";
    }
  };
};
