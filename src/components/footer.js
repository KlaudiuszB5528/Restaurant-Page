const createFooter = () => {
  const footer = document.createElement("footer");

  const githubLink = document.createElement("a");

  const githubIcon = document.createElement("i");

  githubLink.setAttribute("href", "https://github.com/KlaudiuszB5528");

  githubIcon.classList.add("fab", "fa-github");

  githubLink.appendChild(githubIcon);

  footer.classList.add("footer");

  footer.textContent = `Copyright © ${new Date().getFullYear()} Klaudiusz Biegacz`;

  footer.appendChild(githubLink);

  return footer;
};

export default createFooter;
