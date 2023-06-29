const menuItems = document.querySelectorAll('.item-menu');
console.log(menuItems)

menuItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

const body = document.querySelector ("body");
const iconos = document.querySelectorAll (".alinear-iconos");

const boton = document.querySelector ("#btn-dark");

boton.addEventListener("click", function (e) {
    body.classList.toggle ("modo oscuro");
    iconos.forEach(function (icono) {
        icono.classList.toggle ("color-icon");
    });
});