const createContactPage = () => {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact");

  let info = document.createElement("div");
  info.innerHTML = `<div>
  <span><i class="fa-solid fa-phone"></i><p>1234567890</p></span>
  <span><i class="fa-solid fa-envelope"></i><p>kbspizza@pizza.piz</p></span>
  <span><i class="fa-solid fa-clock"></i><p>Mon-Fri : 8am-4pm</p></span>
  <span><i class="fa-solid fa-clock"></i><p>Sat-Sun : 8am-8pm</p></span>
  </div>`;

  let map = document.createElement("div");
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105807.43402885157!2d-118.33126111870654!3d34.03149699164164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c793a9bf3edd%3A0x908f2d6293ce0caa!2sMcDonald&#39;s!5e0!3m2!1spl!2spl!4v1646770972189!5m2!1spl!2spl" width="300" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

  contactPage.appendChild(info);
  contactPage.appendChild(map);

  return contactPage;
};

export default createContactPage;
