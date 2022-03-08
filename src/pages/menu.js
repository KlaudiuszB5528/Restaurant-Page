const createMenuPage = () => {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu");

  let menuHeader = document.createElement("h2");
  let headerIcon = document.createElement("i");
  headerIcon.classList.add("fa-solid", "fa-utensils");
  menuHeader.textContent = "Menu";
  menuHeader.appendChild(headerIcon);

  let menuList = document.createElement("ul");
  for (let i = 0; i < 7; i++) {
    let listElement = document.createElement("li");
    let pizzaName = document.createElement("span");
    let pizzaPrice = document.createElement("span");
    listElement.appendChild(pizzaName);
    listElement.appendChild(pizzaPrice);
    menuList.appendChild(listElement);
  }

  menuList.children[0].children[0].textContent = "Capriciossa";
  menuList.children[1].children[0].textContent = "Margherita";
  menuList.children[2].children[0].textContent = "Havaii";
  menuList.children[3].children[0].textContent = "Pepperoni";
  menuList.children[4].children[0].textContent = "Cheese Madness";
  menuList.children[5].children[0].textContent = "Odin's Favourite";
  menuList.children[6].children[0].textContent = "KB's special";

  menuList.children[0].children[1].textContent = "$15";
  menuList.children[1].children[1].textContent = "$15";
  menuList.children[2].children[1].textContent = "$16.5";
  menuList.children[3].children[1].textContent = "$17";
  menuList.children[4].children[1].textContent = "$20";
  menuList.children[5].children[1].textContent = "$25";
  menuList.children[6].children[1].textContent = "$30";

  menuPage.appendChild(menuHeader);
  menuPage.appendChild(menuList);

  return menuPage;
};

export default createMenuPage;
