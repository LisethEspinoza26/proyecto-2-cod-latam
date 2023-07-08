const menuItems = document.querySelectorAll(".item-menu");
console.log(menuItems);

menuItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active");
  });
});

const body = document.querySelector("body");
const iconos = document.querySelectorAll(".alinear-iconos");
const boton = document.querySelector("#btn-dark");

boton.addEventListener("click", function (e) {
  document.body.classList.toggle("dark");
  boton.classList.toggle("active");
  iconos.forEach(function (icono) {
    icono.classList.add("color_icon");
  });
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener ("click", () => {
  nav.classList.add ("visible");
});

cerrar.addEventListener ("click", () => {
  nav.classList.remove ("visible");
});
