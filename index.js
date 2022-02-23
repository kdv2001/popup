////Varint 1
// let btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// btn.onclick = function () {
//     if (event.target != popup) {
//         popup.classList.toggle('popup_opened');
//     }
// };
// document.body.appendChild(btn);
// let popup = document.querySelector('.popup');
// document.getElementById('root').addEventListener('click', function (event) {
//     if (event.target != popup) {
//         popup.classList.toggle('popup_opened');
//     }
// });

////Varint 2
let popup = document.querySelector('.popup');
let btn = document.createElement("button")
btn.innerHTML = "Click Me";
btn.style.width = '200px'
btn.style.height = '70px'
document.body.insertBefore(btn, document.getElementById('root'));

btn.onclick = () => {
    popup.classList.toggle('popup_opened');
}

popup.addEventListener('click', function (event) {
    event.stopPropagation();
});
document.getElementById('root').addEventListener('click', function (event) {
    popup.classList.toggle('popup_opened');
});
