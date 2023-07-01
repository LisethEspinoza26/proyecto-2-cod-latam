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
    boton.classList.toggle ("on");
    body.classList.toggle ("dark");
    iconos.forEach(function (icono) {
        icono.classList.add ("color_icon");
    });
});
