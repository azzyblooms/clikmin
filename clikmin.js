// AUDIO
const clickSound = new Audio('audio/pluck.mp3');
const deletefile = new Audio('audio/deletefile.mp3');
// ELEMENTS
const clickableMin = document.getElementById('clickablemin');
const toggleMute = document.getElementById('togglemute');
const music = document.getElementById('music');
const number = document.getElementById('coolnumber');
const pageTitle = document.getElementById('pagetitle');

const rpcost = document.getElementById('rpcost');
const rptext = document.getElementById('rptext');
const rpamount = document.getElementById('rpamount');
const rpcosttext = document.querySelectorAll(".rpcosttext")
const rpbox = document.getElementById('rpbox');

const bpcost = document.getElementById('bpcost');
const bptext = document.getElementById('bptext');
const bpamount = document.getElementById('bpamount');
const bpcosttext = document.querySelectorAll(".bpcosttext")
const bpbox = document.getElementById('bpbox');

const ypcost = document.getElementById('ypcost');
const yptext = document.getElementById('yptext');
const ypamount = document.getElementById('ypamount');
const ypcosttext = document.querySelectorAll(".ypcosttext")
const ypbox = document.getElementById('ypbox');

// VARIABLES
let pokos = Number(localStorage.getItem("pokos")) || 0;
// - red pikmin
let rp = Number(localStorage.getItem("rp")) || 0;
let rpprice = 15;
let rpmulti = 1;
let bp = Number(localStorage.getItem("bp")) || 0;
let bpprice = 100;
let bpmulti = 1;
let yp = Number(localStorage.getItem("bp")) || 0;
let ypprice = 1100;
let ypmulti = 1;
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
    localStorage.setItem("bp", bp);
    number.textContent = fixNumber(pokos);
    if(pokos == 1) {
        pageTitle.textContent = "clikmin: " + pokos + " poko"
    } else {
        pageTitle.textContent = "clikmin: " + pokos + " pokos"
    }
    pokoUpdates();
    if(music.muted == false) {
    number.style.transform = "scale(1.2)";
    number.style.transition = "ease 50ms"
    setTimeout(() => {
        number.style.transform = "scale(1)";
    }, 50);
}
    
}
function shake(duration) {
    clickableMin.classList.add("shaking");
    rpbox.classList.add("shaking");
    bpbox.classList.add("shaking");
    number.classList.add("shaking");
    setTimeout(() => {
        rpbox.classList.remove("shaking");
        bpbox.classList.remove("shaking");
        number.classList.remove("shaking");
        clickableMin.classList.remove("shaking");
    }, duration)
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
    if(pokos >= bpprice) {
        bpcosttext.forEach(element => {
            element.style.color = "green";
        });
    } else {
        bpcosttext.forEach(element => {
            element.style.color = "red";
        });
    }
    if(pokos >= ypprice) {
        ypcosttext.forEach(element => {
            element.style.color = "green";
        });
    } else {
        ypcosttext.forEach(element => {
            element.style.color = "red";
        });
    }
}

function fixNumber(num) {
    if(num < 1000) return Math.floor(num);

    const suffixes = ["k", "M", "B", "T", "qd", "Qn", "sx"];
    let index = -1;

    while(num >= 1000 && index < suffixes.length - 1) {
        num /= 1000;
        index++;
    }
    let roundednum = Math.round(num * 100) / 100;
    let numstring = roundednum.toString();
    return numstring + suffixes[index];
}

function updateRPPrice() {
    localStorage.setItem("rp", rp);
    rpprice = Math.floor(15 * Math.pow(1.15, rp));
    rpcost.textContent = fixNumber(rpprice);
    rpamount.textContent = "x" + rp;
}
function updateBPPrice() {
    localStorage.setItem("bp", bp);
    bpprice = Math.floor(100 * Math.pow(1.15, bp));
    bpcost.textContent = fixNumber(bpprice);
    bpamount.textContent = "x" + bp;
}
function updateYPPrice() {
    localStorage.setItem("yp", yp);
    ypprice = Math.floor(1100 * Math.pow(1.15, yp));
    ypcost.textContent = fixNumber(ypprice);
    ypamount.textContent = "x" + yp;
}

// handling pokos

document.addEventListener('DOMContentLoaded', () => {
    updatePokos();
    updateRPPrice();
    updateBPPrice();
    updateYPPrice();
    music.play();
})

// clicking main clickable

clickableMin.addEventListener('mousedown', () => {
    clickerSound();
    pokos++;
    updatePokos();
    pokoUpdates();
});

// reset file

document.addEventListener('keypress', (event) => {
    if(event.key === "a") {
        shake(6150);
        deletefile.cloneNode(true).play();
        music.volume = 0.05;
        setTimeout(() => {
            pokos = 0;
            rp = 0;
            rpprice = 15;
            rpamount.textContent = "x" + 0;
            bp = 0;
            bpprice = 100;
            bpamount.textContent = "x" + 0;
            yp = 0;
            ypprice = 100;
            ypamount.textContent = "x" + 0;
            pokoUpdates();
            updatePokos();
            updateRPPrice();
            updateBPPrice();
            updateYPPrice();
            music.volume = 0.5;
            willshake.classList.remove("shake")
        }, 6150);
        

    }
});

//mute unmute


toggleMute.addEventListener('click', () => {
    if(music.muted) {
        music.muted = false;
        toggleMute.style.backgroundImage = "url('images/unmute.png')";
        music.volume = 0.5;
        music.play();
    } else {
        music.muted = true;
        toggleMute.style.backgroundImage = "url('images/mute.png')";
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

// blue pikmin purchasing!!!!

bpbox.addEventListener('mousedown', () => {
    if(pokos >= bpprice) {
        pokos -= bpprice;
        bp++;
        bpamount.textContent = "x" + bp;
        updatePokos();
        updateBPPrice();
    }
})

// yellow pikmin purchasing!!!!

ypbox.addEventListener('mousedown', () => {
    if(pokos >= ypprice) {
        pokos -= ypprice;
        yp++;
        ypamount.textContent = "x" + yp;
        updatePokos();
        updateYPPrice();
    }
})

// run every second

setInterval(() => {
    pokos += rp * 0.1 * rpmulti;
    pokos += bp * bpmulti;
    pokos += yp * 8 * ypmulti;
    updatePokos();
}, 1000)