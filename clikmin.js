// AUDIO
const music = new Audio('audio/musicbox.wav');
music.addEventListener("timeupdate", () => {
    if (music.currentTime >= 95.76) {
        music.currentTime = 0;
        music.play();
    }
});
const clickSound = new Audio('audio/pluck.mp3');
const deletefile = new Audio('audio/deletefile.mp3');
const cashregister1 = new Audio('audio/cashregister1.wav');
const cashregister2 = new Audio('audio/cashregister2.wav');
const cashregister3 = new Audio('audio/cashregister3.wav');
const cashregister4 = new Audio('audio/cashregister4.wav');
const cashregister5 = new Audio('audio/cashregister5.wav'); 
const cashregister6 = new Audio('audio/cashregister6.wav');
let pokosgained = 0;
const cashregisterSounds = [
    cashregister1,
    cashregister2,
    cashregister3,
    cashregister4,
    cashregister5,
    cashregister6
];
const nope = new Audio('audio/deny.wav');
const yup = new Audio('audio/modify.wav');
const upgrade = new Audio('audio/upgrade.wav');
// ELEMENTS
const clickableMin = document.getElementById('clickablemin');
const toggleMute = document.getElementById('togglemute');
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

const rum = document.getElementById('rum');
const bum = document.getElementById('bum');
const yum = document.getElementById('yum');
const gum = document.getElementById('gum');
const cursum = document.getElementById('cursum');

const ru = document.getElementById('ru1');
const bu = document.getElementById('bu1');
const yu = document.getElementById('yu1');
const gu = document.getElementById('gu1');
const cu = document.getElementById('cu1');

const ruptxt = document.getElementById('ruprice');
const buptxt = document.getElementById('buprice');
const yuptxt = document.getElementById('yuprice');
const guptxt = document.getElementById('guprice');
const cuptxt = document.getElementById('cuprice');

// VARIABLES
let pokos = Number(localStorage.getItem("pokos")) || 0;
let musicplaying = false;
let rp = Number(localStorage.getItem("rp")) || 0;
let rpprice = 15;
let rpmulti = 1;
let bp = Number(localStorage.getItem("bp")) || 0;
let bpprice = 100;
let bpmulti = 1;
let yp = Number(localStorage.getItem("yp")) || 0;
let ypprice = 1100;
let ypmulti = 1;
let genmulti = 1;
let clickmulti = 1;

let ruprice = 1000;
let buprice = 5000;
let yuprice = 15000;
let guprice = 10000;
let cuprice = 2000;


// declaring functions

function clickerSound() {
    const clickingSound = clickSound.cloneNode();
    clickingSound.volume = 0.05;
    clickingSound.play();
}
function nopeSound() {
    const nopeSounding = nope.cloneNode();
    nopeSounding.volume = 0.3;
    nopeSounding.play();
}
function yupSound() {
    const yupSounding = yup.cloneNode();
    yupSounding.volume = 0.3;
    yupSounding.play();
}
function updatePokos() {
    localStorage.setItem("pokos", pokos);
    localStorage.setItem("rp", rp);
    localStorage.setItem("bp", bp);
    number.textContent = fixNumber(pokos);
    pageTitle.textContent = "clikmin: " + fixNumber(pokos)
    pokoUpdates();
    updateUpgrades();
    if(music.muted == false) {
    number.style.transform = "scale(1.2)";
    number.style.transition = "ease 50ms"
    setTimeout(() => {
        number.style.transform = "scale(1)";
    }, 50);
}
}
function buySomething() {
    yupSound();
    cashMoney();
}
function cashMoney() {
    let index = Math.floor(Math.random() * 6)

    let cashSound = cashregisterSounds[index].cloneNode();
    cashSound.volume = 0.2;
    cashSound.play();
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
    if(pokos >= ruprice) {
        ru.style.filter = 'saturate(1)'
    } else {
        ru.style.filter = 'saturate(0)'
    }
    if(pokos >= buprice) {
        bu.style.filter = 'saturate(1)'
    } else {
        bu.style.filter = 'saturate(0)'
    }
    if(pokos >= yuprice) {
        yu.style.filter = 'saturate(1)'
    } else {
        yu.style.filter = 'saturate(0)'
    }
    if(pokos >= guprice) {
        gu.style.filter = 'saturate(1)'
    } else {
        gu.style.filter = 'saturate(0)'
    }
        if(pokos >= cuprice) {
        cu.style.filter = 'saturate(1)'
    } else {
        cu.style.filter = 'saturate(0)'
    }
}

function fixNumber(num) {
    if(num < 1000) { 
        const floored = Math.floor(num);
        if(floored == 1) {
            return floored + " poko";
        } else {
            return floored + " pokos";
        }
    }

    const suffixes = ["k", "M", "B", "T", "qd", "Qn", "sx"];
    let index = -1;

    while(num >= 1000 && index < suffixes.length - 1) {
        num /= 1000;
        index++;
    }
    let roundednum = Math.round(num * 100) / 100;
    let numstring = roundednum.toString();
    if(roundednum != 0) {
        return numstring + suffixes[index] + " pokos";
    } else {
        return numstring + suffixes[index] + " poko";
    }
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
function updateUpgrades() {
    rum.textContent = "x" + rpmulti; 
    bum.textContent = "x" + bpmulti; 
    yum.textContent = "x" + ypmulti; 
    gum.textContent = "x" + genmulti; 
    cursum.textContent = "x" + clickmulti; 
    ruptxt.textContent = ruprice;
    buptxt.textContent = buprice;
    yuptxt.textContent = yuprice;
    guptxt.textContent = guprice;
    cuptxt.textContent = cuprice;
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
    pokos = pokos + (1 * genmulti * clickmulti)
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
        musicplaying = true;
        music.play();
    } else {
        music.muted = true;
        music.pause();
        musicplaying = false;
        toggleMute.style.backgroundImage = "url('images/mute.png')";
    }
});
// red pikmin purchasing!!!!

rpbox.addEventListener('mousedown', () => {
    if(pokos >= rpprice) {
        pokos -= rpprice;
        buySomething(); 
        rp++;
        rpamount.textContent = "x" + rp;
        updatePokos();
        updateRPPrice();
    } else {
        nopeSound();
    }
})

// blue pikmin purchasing!!!!

bpbox.addEventListener('mousedown', () => {
    if(pokos >= bpprice) {
        pokos -= bpprice;
        bp++;
        buySomething();
        bpamount.textContent = "x" + bp;
        updatePokos();
        updateBPPrice();
    } else {
        nopeSound();
    }
})

// yellow pikmin purchasing!!!!

ypbox.addEventListener('mousedown', () => {
    if(pokos >= ypprice) {
        pokos -= ypprice;
        yp++;
        ypamount.textContent = "x" + yp;
        buySomething();
        updatePokos();
        updateYPPrice();
    } else {
        nopeSound();
    }
})

// run every second

setInterval(() => {
    pokosgained = ((rp * 0.1) + bp + (yp * 8)) * genmulti;
    pokos += pokosgained; 
    updatePokos();
}, 1000)