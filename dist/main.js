(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.classList.add("home");const t=document.createElement("h2"),n=document.createElement("img");n.setAttribute("src","images/pizza.svg");const d=document.createElement("p");return t.textContent="Welcome to KB's",d.textContent="If You were looking for the best pizza, You found it! Come and find out :)",e.appendChild(t),e.appendChild(n),e.appendChild(d),e},t=t=>{let n=t.target.textContent,d=document.querySelector(".main-content");switch(n){case"Home":d.hasChildNodes()&&d.removeChild(d.children[0]),d.appendChild(e());break;case"Menu":d.hasChildNodes()&&d.removeChild(d.children[0]),d.appendChild((()=>{const e=document.createElement("div");e.classList.add("menu");let t=document.createElement("h2"),n=document.createElement("i");n.classList.add("fa-solid","fa-utensils"),t.textContent="Menu",t.appendChild(n);let d=document.createElement("ul");for(let e=0;e<7;e++){let e=document.createElement("li"),t=document.createElement("span"),n=document.createElement("span");e.appendChild(t),e.appendChild(n),d.appendChild(e)}return d.children[0].children[0].textContent="Capriciossa",d.children[1].children[0].textContent="Margherita",d.children[2].children[0].textContent="Havaii",d.children[3].children[0].textContent="Pepperoni",d.children[4].children[0].textContent="Cheese Madness",d.children[5].children[0].textContent="Odin's Favourite",d.children[6].children[0].textContent="KB's special",d.children[0].children[1].textContent="$15",d.children[1].children[1].textContent="$15",d.children[2].children[1].textContent="$16.5",d.children[3].children[1].textContent="$17",d.children[4].children[1].textContent="$20",d.children[5].children[1].textContent="$25",d.children[6].children[1].textContent="$30",e.appendChild(t),e.appendChild(d),e})());break;case"Contact":d.hasChildNodes()&&d.removeChild(d.children[0]),d.appendChild((()=>{const e=document.createElement("div");e.classList.add("contact");let t=document.createElement("div");return t.classList.add("contact-info"),t.innerHTML='\n  <span><i class="fa-solid fa-location-dot"></i><p>Kb\'s Avenue 123, Badgerland Oklahoma</p></span>\n  <span><i class="fa-solid fa-phone"></i><p>1234567890</p></span>\n  <span><i class="fa-solid fa-envelope"></i><p>kbspizza@pizza.piz</p></span>\n  <span><i class="fa-solid fa-clock"></i><p>Mon-Fri : 8am-4pm</p></span>\n  <span><i class="fa-solid fa-clock"></i><p>Sat-Sun : 8am-8pm</p></span>',e.appendChild(t),e})());break;default:return}};(()=>{const n=document.querySelector("#content"),d=document.createElement("div");d.classList.add("main-content"),n.appendChild((()=>{const e=document.createElement("nav"),t=document.createElement("ul"),n=document.createElement("li"),d=document.createElement("h1"),a=document.createElement("i"),l=document.createElement("li"),c=document.createElement("button");c.textContent="Home";const i=document.createElement("li"),o=document.createElement("button");o.textContent="Menu";const r=document.createElement("li"),s=document.createElement("button");return s.textContent="Contact",d.textContent="KB's Pizza",a.classList.add("fa-solid","fa-pizza-slice"),l.appendChild(c),i.appendChild(o),r.appendChild(s),n.appendChild(d),n.appendChild(a),t.appendChild(n),t.appendChild(l),t.appendChild(i),t.appendChild(r),e.appendChild(t),e})()),document.querySelector("nav").addEventListener("click",t),n.appendChild(d),d.appendChild(e()),n.appendChild((()=>{const e=document.createElement("footer"),t=document.createElement("a"),n=document.createElement("i");return t.setAttribute("href","https://github.com/KlaudiuszB5528"),n.classList.add("fab","fa-github"),t.appendChild(n),e.classList.add("footer"),e.textContent=`Copyright © ${(new Date).getFullYear()} Klaudiusz Biegacz`,e.appendChild(t),e})())})()})();