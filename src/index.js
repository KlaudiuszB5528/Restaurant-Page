import navbar from "./components/navbar";
import handleNavButtons from "./functions/handleNavButtons";
import homePage from "./pages/home";
import footer from "./components/footer";

const App = (() => {
  const content = document.querySelector("#content");
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  content.appendChild(navbar());

  const navigation = document.querySelector("nav");
  navigation.addEventListener("click", handleNavButtons);

  content.appendChild(mainContent);
  mainContent.appendChild(homePage());
  content.appendChild(footer());
})();
