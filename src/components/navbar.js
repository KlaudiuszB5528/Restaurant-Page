const createNavbar = () => {
  const navbar = document.createElement("nav");

  const navList = document.createElement("ul");

  const liHeader = document.createElement("li");
  const header = document.createElement("h1");
  const headerIcon = document.createElement("i");

  const liHome = document.createElement("li");
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";

  const liMenu = document.createElement("li");
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";

  const liContact = document.createElement("li");
  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";

  header.textContent = "KB's Pizza";
  headerIcon.classList.add("fa-solid", "fa-pizza-slice");
  liHome.appendChild(homeButton);
  liMenu.appendChild(menuButton);
  liContact.appendChild(contactButton);

  liHeader.appendChild(header);
  liHeader.appendChild(headerIcon);
  navList.appendChild(liHeader);
  navList.appendChild(liHome);
  navList.appendChild(liMenu);
  navList.appendChild(liContact);
  navbar.appendChild(navList);

  return navbar;
};

export default createNavbar;
