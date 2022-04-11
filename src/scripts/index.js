import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
const { restaurants } = require("../DATA.json");

console.log("Hello Coders! :)");

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("slide");
  hero.classList.toggle("turun");
});

restaurants.forEach((resto) => {
  const restoItem = document.createElement("article");
  restoItem.setAttribute("class", "resto-item");
  restoItem.innerHTML = `
                          <div class="resto-item__header">
                            <img src="${
                              resto.pictureId
                            }" class="resto-img__thumbnail" alt="${
    resto.name || "restoran"
  }">
                            <p class="resto-item__city">Kota ${resto.city}</p>
                          </div>                        
                          <div class="resto-item__content">
                            <p class="resto-item__rating">Rating : <span class="rating">${
                              resto.rating
                            }</span></p>
                            <h2><a class="resto-item__title" href="# arial-label="name of restaurant">${
                              resto.name
                            }</a></h2>
                            <p class="resto-item__description">${
                              resto.description
                            }</p>
                          </div>
                        `;
  document.querySelector(".resto").appendChild(restoItem);
});

const recomended = restaurants.filter((resto) => resto.rating > 4.6);
recomended.forEach((resto) => {
  const recomendedItem = document.createElement("article");
  recomendedItem.setAttribute("class", "recomend-item");
  recomendedItem.innerHTML = `
                          <div class="recomend-item__header">
                            <img src="${
                              resto.pictureId
                            }" class="recomend-img__thumbnail" alt="${
    resto.name || "restoran"
  }">
                            <p class="recomend-item__city">Kota ${
                              resto.city
                            }</p>
                          </div>
                          <div class="recomend-item__content">
                            <p class="recomend-item__rating">Rating : <span class="rating">${
                              resto.rating
                            }</span></p>
                            <h2>
                              <a class="recomend-item__title" href="# arial-label="name of restaurant">${
                                resto.name
                              }</a>
                            </h2>
                            <p class="recomend-item__description">${
                              resto.description
                            }</p>
                          </div>
                        `;
  document.querySelector(".recomend").appendChild(recomendedItem);
});
