const clickSound = new Audio('audio/meow.mp3');
const clickableMin = document.getElementById('clickablemin');
const number = document.getElementById('coolnumber');
let pokos = 0;


clickableMin.addEventListener('click', () => {
    clickSound.cloneNode(true).play();
    pokos++;
    number.textContent = pokos;
    number.style.transform = "scale(1.2)";
    number.style.transition = "ease 50ms"
    setTimeout(() => {
        number.style.transform = "scale(1)";
    }, 50);
});
