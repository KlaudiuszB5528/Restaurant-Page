const createContactPage = () => {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact");

  let info = document.createElement("div");
  info.classList.add("contact-info");
  info.innerHTML = `
  <span><i class="fa-solid fa-location-dot"></i><p>Kb's Avenue 123, Badgerland Oklahoma</p></span>
  <span><i class="fa-solid fa-phone"></i><p>1234567890</p></span>
  <span><i class="fa-solid fa-envelope"></i><p>kbspizza@pizza.piz</p></span>
  <span><i class="fa-solid fa-clock"></i><p>Mon-Fri : 8am-4pm</p></span>
  <span><i class="fa-solid fa-clock"></i><p>Sat-Sun : 8am-8pm</p></span>`;

  contactPage.appendChild(info);

  return contactPage;
};

export default createContactPage;
