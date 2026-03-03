// AUDIO
const clickSound = new Audio('audio/pluck.mp3');
// ELEMENTS
const clickableMin = document.getElementById('clickablemin');
const number = document.getElementById('coolnumber');
const pageTitle = document.getElementById('pagetitle');
const rpcost = document.getElementById('rpcost');
const rptext = document.getElementById('rptext');
const rpamount = document.getElementById('rpamount');
const rpcosttext = document.querySelectorAll(".rpcosttext")
const rpbox = document.getElementById('rpbox');
// VARIABLES
let pokos = Number(localStorage.getItem("pokos")) || 0;
let rp = Number(localStorage.getItem("rp")) || 0;
let rpprice = 15;
// variable stuff that can probs be coded more efficienter

// declaring functions

function clickerSound() {
    const clickingSound = clickSound.cloneNode();
    clickingSound.volume = 0.05;
    clickingSound.play();
}
function updatePokos() {
    localStorage.setItem("pokos", pokos);
    localStorage.setItem("rp", rp);
    number.textContent = pokos;
    if(pokos == 1) {
        pageTitle.textContent = "clikmin: " + pokos + " poko"
    } else {
        pageTitle.textContent = "clikmin: " + pokos + " pokos"
    }
    pokoUpdates();
}

function pokoUpdates() {
    if(pokos >= rpprice) {
        rpcosttext.forEach(element => {
            element.style.color = "green";
        });
    } else {
        rpcosttext.forEach(element => {
            element.style.color = "red";
        });
    }
}

function updateRPPrice() {
    localStorage.setItem("rp", rp);
    rpprice = Math.floor(15 * Math.pow(1.15, rp));
    rpcost.textContent = rpprice;
    rpamount.textContent = "x" + rp;
}

// handling pokos

document.addEventListener('DOMContentLoaded', () => {
    updatePokos();
    updateRPPrice();
})

// clicking main clickable

clickableMin.addEventListener('mousedown', () => {
    clickerSound();
    pokos++;
    updatePokos();
    pokoUpdates();
    number.style.transform = "scale(1.2)";
    number.style.transition = "ease 50ms"
    setTimeout(() => {
        number.style.transform = "scale(1)";
    }, 50);
});

// reset file

document.addEventListener('keypress', () => {
    if(event.key == "a") {
        pokos = 0;
        rp = 0;
        rpamount = 0;
        rpprice = 15;
        rpamount.textContent = "x" + 15;
        updatePokos();
        updateRPPrice();
    }
});

// red pikmin purchasing!!!!

rpbox.addEventListener('mousedown', () => {
    if(pokos >= rpprice) {
        pokos -= rpprice;
        rp++;
        rpamount.textContent = "x" + rp;
        updatePokos();
        updateRPPrice();
    }
})