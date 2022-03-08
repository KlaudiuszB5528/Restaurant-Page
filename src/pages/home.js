const createHomePage = () => {
  const homePage = document.createElement("div");
  homePage.classList.add("home");
  const homeHeader = document.createElement("h2");
  const homeIcon = document.createElement("img");
  homeIcon.setAttribute("src", "images/pizza.svg");
  const homeText = document.createElement("p");
  homeHeader.textContent = "Welcome to KB's";
  homeText.textContent =
    "If You were looking for the best pizza, You found it! Come and find out :)";
  homePage.appendChild(homeHeader);
  homePage.appendChild(homeIcon);
  homePage.appendChild(homeText);
  return homePage;
};

export default createHomePage;
