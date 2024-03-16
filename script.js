const burger = document.getElementById('burger');
const fries = document.getElementById('fries');
const drink = document.getElementById('drink');
const btn = document.getElementById('btn');
const order = document.querySelector('.order');

btn.addEventListener('click', function() {
    order.innerHTML = ''; 
    if (burger.checked) {
        appendToOrderList('image/burgur.avif');
    }
    if (fries.checked) {
        appendToOrderList('image/drik.avif');
    }
    if (drink.checked) {
        appendToOrderList('image/fries.avif');
    }
});

function appendToOrderList(imageSrc) {
    const img = document.createElement('img');
    img.src = imageSrc;
    order.appendChild(img);
}
