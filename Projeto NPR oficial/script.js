  const btnMenu = document.getElementById("btn-menu");
  const menu = document.getElementById("menu-fullscreen");

  btnMenu.addEventListener("click", () => {
    menu.style.display = "flex";
  });

  menu.addEventListener("click", () => {
    menu.style.display = "none";
  });