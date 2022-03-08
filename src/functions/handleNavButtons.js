import homePage from "../pages/home";
import contactPage from "../pages/contact";
import menuPage from "../pages/menu";

const handleNavButtons = (e) => {
  let option = e.target.textContent;
  let mainContent = document.querySelector(".main-content");

  switch (option) {
    case "Home":
      if (mainContent.hasChildNodes())
        mainContent.removeChild(mainContent.children[0]);

      mainContent.appendChild(homePage());
      break;
    case "Menu":
      if (mainContent.hasChildNodes())
        mainContent.removeChild(mainContent.children[0]);

      mainContent.appendChild(menuPage());
      break;
    case "Contact":
      if (mainContent.hasChildNodes())
        mainContent.removeChild(mainContent.children[0]);

      mainContent.appendChild(contactPage());
      break;
    default:
      return;
  }
};

export default handleNavButtons;
