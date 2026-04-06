// AUDIO
const music = new Audio('audio/musicbox.wav');
music.addEventListener("timeupdate", () => {
    if (music.currentTime >= 95.75) {
        music.currentTime = 0;
        music.play();
    }
});
const clickSound = new Audio('audio/pluck.mp3');
const cpsNum = document.getElementById('lesscoolnumber')
const deletefile = new Audio('audio/deletefile.mp3');
const cashregister1 = new Audio('audio/cashregister1.wav');
const cashregister2 = new Audio('audio/cashregister2.wav');
const cashregister3 = new Audio('audio/cashregister3.wav');
const cashregister4 = new Audio('audio/cashregister4.wav');
const cashregister5 = new Audio('audio/cashregister5.wav'); 
const cashregister6 = new Audio('audio/cashregister6.wav');
let pokosgained = 0;
let clickamount = 1;
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

const clickquired = [15, 50, 100];
// ELEMENTS

const clickableMin = document.getElementById('clickablemin');
const toggleMute = document.getElementById('togglemute');
const number = document.getElementById('coolnumber');
const pageTitle = document.getElementById('pagetitle');
const statsTitle = document.getElementById('statstitle');
const statsBar = document.getElementById('sidebar');
const statsText = document.getElementById('statsbox');

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

const rui = document.getElementById('rui');
const bui = document.getElementById('bui');
const yui = document.getElementById('yui');
const gui = document.getElementById('gui');
const cui = document.getElementById('cui');

const ri = document.getElementById('ri');
const bi = document.getElementById('bi');
const yi = document.getElementById('yi');
const pi = document.getElementById('pi');
const ci = document.getElementById('ci');

const ruptxt = document.getElementById('ruprice');
const buptxt = document.getElementById('buprice');
const yuptxt = document.getElementById('yuprice');
const guptxt = document.getElementById('guprice');
const cuptxt = document.getElementById('cuprice');
const upgradeBox = document.getElementById('upgradebigbox')
// VARIABLES
let pokos = Number(localStorage.getItem("pokos")) || 0;
let musicplaying = false;
let rp = Number(localStorage.getItem("rp")) || 0;
let rpprice = 15;
let bp = Number(localStorage.getItem("bp")) || 0;
let bpprice = 100;
let yp = Number(localStorage.getItem("yp")) || 0;
let totalClicks = Number(localStorage.getItem("totalClicks")) || 0;
let ypprice = 1100;

let ruprice = 1000;
let buprice = 5000;
let yuprice = 15000;
let guprice = 25000;
let cuprice = 2000;

let ruquired = 10;
let buquired = 10;
let yuquired = 10;
let guquired = 10;
let cuquired = 15;

let rus = Number(localStorage.getItem("rus")) || 0;
let bus = Number(localStorage.getItem("bus")) || 0;
let yus = Number(localStorage.getItem("yus")) || 0;
let gus = Number(localStorage.getItem("gus")) || 0;
let cus = Number(localStorage.getItem("cus")) || 0;

let rpmulti = Number(localStorage.getItem("rpmulti")) || 1;
let bpmulti = Number(localStorage.getItem("bpmulti")) || 1;
let ypmulti = Number(localStorage.getItem("ypmulti")) || 1;
let genmulti = Number(localStorage.getItem("genmulti")) || 1;
let clickmulti = Number(localStorage.getItem("clickmulti")) || 1;

// declaring functions

function clickerSound() {
    const clickingSound = clickSound.cloneNode();
    clickingSound.volume = 0.05;
    clickingSound.play();
}
function saveUpgrades() {
    localStorage.setItem("rus", rus);
    localStorage.setItem("bus", bus);
    localStorage.setItem("yus", yus);
    localStorage.setItem("gus", gus);
    localStorage.setItem("cus", cus);

    localStorage.setItem("rpmulti", rpmulti);
    localStorage.setItem("bpmulti", bpmulti);
    localStorage.setItem("ypmulti", ypmulti);
    localStorage.setItem("genmulti", genmulti);
    localStorage.setItem("clickmulti", clickmulti);
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
    fixOnion();
    pokosgained = ((rp * 0.1 * rpmulti) + (bp * bpmulti) + (yp * 8 * ypmulti)) * genmulti;
    localStorage.setItem("pokos", pokos);
    localStorage.setItem("rp", rp);
    localStorage.setItem("bp", bp);
    number.textContent = fixNumber(pokos);
    pageTitle.textContent = "clikmin: " + fixNumber(pokos)
    pokoUpdates();
    statsUpdate();
    updateUpgrades();
    if(music.muted == false) {
    number.style.transform = "scale(1.2)";
    number.style.transition = "ease 50ms"
    setTimeout(() => {
        number.style.transform = "scale(1)";
    }, 50);
}
    cpsNum.textContent = fixNoRound(pokosgained) + " per second";
}
function buySomething() {
    pokosgained = ((rp * 0.1 * rpmulti) + (bp * bpmulti) + (yp * 8 * ypmulti)) * genmulti;
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
    cpsNum.classList.add("shaking");
    upgradeBox.classList.add("shaking");
    bpbox.classList.add("shaking");
    ypbox.classList.add("shaking");
    number.classList.add("shaking");
    setTimeout(() => {
        rpbox.classList.remove("shaking");
        upgradeBox.classList.remove("shaking");
        cpsNum.classList.remove("shaking");
        bpbox.classList.remove("shaking");
        ypbox.classList.remove("shaking");
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


    if(rp >= ruquired) {
        ri.style.filter = 'saturate(1)'
    } else {
        ri.style.filter = 'saturate(0)'
    }
    if(bp >= buquired) {
        bi.style.filter = 'saturate(1)'
    } else {
        bi.style.filter = 'saturate(0)'
    }
    if(yp >= yuquired) {
        yi.style.filter = 'saturate(1)'
    } else {
        yi.style.filter = 'saturate(0)'
    }
    if(pokosgained >= guquired) {
        pi.style.filter = 'saturate(1)'
    } else {
        pi.style.filter = 'saturate(0)'
    }
    if(totalClicks >= cuquired) {
        ci.style.filter = 'brightness(1)'
    } else {
        ci.style.filter = 'brightness(0)'
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

    const suffixes = ["k", "M", "B", "T", "qd", "Qn", "sx", "Sp", "O", "N", "de", "Ud", "DD", "tdD", "qdD", "QnD", "sxD", "SpD", "OcD", "NvD", "Vgn", "UVg", "DVg", "TVg", "qtV", "QnV", "SeV", "SPG", "OVG", "NVG", "TGN", "UTG", "DTG", "tsTG"];
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
function EfixNumber(num) {
    if(num < 1000) { 
        return Math.floor(num)
    }

    const suffixes = ["k", "M", "B", "T", "qd", "Qn", "sx", "Sp", "O", "N", "de", "Ud", "DD", "tdD", "qdD", "QnD", "sxD", "SpD", "OcD", "NvD", "Vgn", "UVg", "DVg", "TVg", "qtV", "QnV", "SeV", "SPG", "OVG", "NVG", "TGN", "UTG", "DTG", "tsTG"];
    let index = -1;

    while(num >= 1000 && index < suffixes.length - 1) {
        num /= 1000;
        index++;
    }
    let roundednum = Math.round(num * 100) / 100;
    let numstring = roundednum.toString();
    return numstring + suffixes[index];
}
function fixNoRound(num) {
    if(num < 1000) { 
        if(num == 1) {
            return (Math.round((num + Number.EPSILON) * 10) / 10) + " poko";
        } else {
            return (Math.round((num + Number.EPSILON) * 10) / 10) + " pokos";
        }
    }

    const suffixes = ["k", "M", "B", "T", "qd", "Qn", "sx", "Sp", "O", "N", "de", "Ud", "DD", "tdD", "qdD", "QnD", "sxD", "SpD", "OcD", "NvD", "Vgn", "UVg", "DVg", "TVg", "qtV", "QnV", "SeV", "SPG", "OVG", "NVG", "TGN", "UTG", "DTG", "tsTG"];
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
    rum.textContent = "x" + EfixNumber(rpmulti); 
    bum.textContent = "x" + EfixNumber(bpmulti); 
    yum.textContent = "x" + EfixNumber(ypmulti); 
    gum.textContent = "x" + EfixNumber(genmulti); 
    cursum.textContent = "x" + EfixNumber(clickmulti); 
    ruptxt.textContent = fixNumber(ruprice);
    buptxt.textContent = fixNumber(buprice);
    yuptxt.textContent = fixNumber(yuprice);
    guptxt.textContent = fixNumber(guprice);
    cuptxt.textContent = fixNumber(cuprice);
    saveUpgrades();
    pokoUpdates();

    if(rus == 0) {
        rui.src = "images/upgrades/redleaf.png"
        rui.style.width = "55.5px"
    } else if(rus == 1) {
        rui.src = "images/upgrades/test/redbud.png"
        rui.style.width = "48.7px"
    } else {
        rui.src = "images/upgrades/test/redflower.png"
    }
    if(bus == 0) {
        bui.src = "images/upgrades/blueleaf.png"
        bui.style.width = "55.5px"
    } else if(bus == 1) {
        bui.src = "images/upgrades/test/bluebud.png"
        bui.style.width = "48.7px"
    } else {
        bui.src = "images/upgrades/test/blueflower.png"
    }
    if(yus == 0) {
        yui.src = "images/upgrades/yellowleaf.png"
        yui.style.width = "55.5px"
    } else if(yus == 1) {
        yui.src = "images/upgrades/test/yellowbud.png"
        yui.style.width = "48.7px"
    } else {
        yui.src = "images/upgrades/test/yellowflower.png"
    }
    if(gus == 0) {
        gui.src = "images/upgrades/coins.png"
        gui.style.width = "55.5px"
        gui.style.height = "55.5px"
        gui.style.marginLeft = "-4px"
        gui.style.marginTop = "0px"
    } else if(gus == 1) {
        gui.src = "images/upgrades/bands.png"
    } else {
        gui.src = "images/upgrades/bag.png"
        gui.style.width = "60px"
        gui.style.height = "60px"
        gui.style.marginLeft = "-7px"
        gui.style.marginTop = "-8px"
    }
    if(cus == 0) {
        cui.src = "images/upgrades/redcursor.png"
    } else if(cus == 1) {
        cui.src = "images/upgrades/bluecursor.png"
    } else {
        cui.src = "images/upgrades/yellowcursor.png"
    }
}

// handling pokos

document.addEventListener('DOMContentLoaded', () => {
    updatePokos();
    updateRPPrice();
    updateUpgrades();
    updateBPPrice();
    updateYPPrice();
    uPriceFix();
    music.play();
    clickamount = 1;
    music.muted = true;
    if(rus > 1) {
        rui.style.width = "48.5px"
    }
    if(bus > 1) {
        bui.style.width = "48.5px"
    }
    if(yus > 1) {
        yui.style.width = "48.5px"
    }
})

// clicking main clickable

clickableMin.addEventListener('mousedown', () => {
    clickerSound();
    pokos = pokos + (clickamount * genmulti * clickmulti)
    totalClicks++;
    localStorage.setItem("totalClicks", totalClicks);
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
            ypprice = 1100;
            ypamount.textContent = "x" + 0;
            rus = 0;
            bus = 0;
            yus = 0;
            gus = 0;
            cus = 0;
            ruprice = 1000;
            buprice = 5000;
            yuprice = 15000;
            guprice = 10000;
            cuprice = 2000;
            rpmulti = 1;
            bpmulti = 1;
            ypmulti = 1;
            genmulti = 1;
            clickmulti = 1;
            pokoUpdates();
            updatePokos();
            updateUpgrades();
            updateRPPrice();
            updateBPPrice();
            updateYPPrice();
            music.volume = 0.5;
            willshake.classList.remove("shake")
        }, 6150);
        

    }
    if(event.key === "d") {
        if(clickamount == 1000000000000000000) {
            clickamount = 1;
        } else {
            clickamount = 1000000000000000000;
        }
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
    pokosgained = ((rp * 0.1 * rpmulti) + (bp * bpmulti) + (yp * 8 * ypmulti)) * genmulti;
    pokos += pokosgained; 
    updatePokos();
}, 1000)

//UPGRADING!
ru.addEventListener('mousedown', () => {
    if(pokos >= ruprice) {
        if(rp >= ruquired) {
            pokos -= ruprice;
            buySomething();
            rus++;
            ruprice = Math.floor(1000 * Math.pow(2, rus * 1.6));
            rpmulti *= 4;
            ruquired = 10 + rus * 10
            updateUpgrades();
        } else {
            nopeSound();
            console.log("not enough pik")
        }
    } else {
        nopeSound();
        console.log("not enough mon")
    }
})
bu.addEventListener('mousedown', () => {
    if(pokos >= buprice) {
        if(bp >= buquired) {
            pokos -= buprice;
            buySomething();
            bus++;
            buprice = Math.floor(5000 * Math.pow(2, bus * 1.6));
            bpmulti *= 3.5;
            buquired = 10 + bus * 10
            updateUpgrades();
        } else {
            nopeSound();
            console.log("not enough pik")
        }
    } else {
        nopeSound();
        console.log("not enough mon")
    }
})
yu.addEventListener('mousedown', () => {
    if(pokos >= yuprice) {
        if(yp >= yuquired) {
            pokos -= yuprice;
            buySomething();
            yus++;
            yuprice = Math.floor(15000 * Math.pow(2, yus * 1.6));
            ypmulti *= 3;
            yuquired = 10 + yus * 10
            updateUpgrades();
        } else {
            nopeSound();
            console.log("not enough pik")
        }
    } else {
        nopeSound();
        console.log("not enough mon")
    }
})
gu.addEventListener('mousedown', () => {
    if(pokos >= guprice) {
        if(pokosgained >= guquired) {
            pokos -= guprice;
            buySomething();
            gus++;
            guprice = Math.floor(25000 * Math.pow(2.4, gus * 1.6));
            genmulti *= 2;
            if ((gus % 3) === 1) { 
                guquired *= 2.5;
            } else {
                guquired *= 2;
            }
            updateUpgrades();
        } else {
            nopeSound();
            console.log("not enough profit")
            console.log(guquired)
            console.log(pokosgained)
        }
    } else {
        nopeSound();
        console.log("not enough mon")
    }
})
cu.addEventListener('mousedown', () => {
    if(pokos >= cuprice) {
        if(totalClicks >= cuquired) {
            pokos -= cuprice;
            buySomething();
            cus++;
            cuprice = Math.floor(2000 * Math.pow(2, cus * 1.6));
            clickmulti *= 2;
            if(cus > 2) {
                cuquired = 100 * (cus - 1) + 100;
            } else {
                cuquired = clickquired[cus]
            }
            updateUpgrades();
        } else {
            nopeSound();
            console.log("not enough click")
            console.log(cuquired)
            console.log(totalClicks)
        }
    } else {
        nopeSound();
        console.log("not enough mon")
    }
})
function uPriceFix() {
    if(cus >= 1) {
        cuprice = Math.floor(2000 * Math.pow(2, cus * 1.6));
    }
    if(gus >= 1) {
        guprice = Math.floor(25000 * Math.pow(2.4, gus * 1.6));
    }
     if(yus >= 1) {
        yuprice = Math.floor(15000 * Math.pow(2, yus * 1.6));
     }
     if(bus >= 1) {
        buprice = Math.floor(5000 * Math.pow(2, bus * 1.6));
     }
     if(rus >= 1) {
        ruprice = Math.floor(1000 * Math.pow(2, rus * 1.6));
     }
    ruptxt.textContent = fixNumber(ruprice);
    buptxt.textContent = fixNumber(buprice);
    yuptxt.textContent = fixNumber(yuprice);
    guptxt.textContent = fixNumber(guprice);
    cuptxt.textContent = fixNumber(cuprice);
}
function fixOnion() {
    if(rp > yp && rp > bp) {
        clickableMin.style.backgroundImage = "url(images/redonion.png)"
    } else if(bp > rp && bp > yp) {
        clickableMin.style.backgroundImage = "url(images/blueonion.png)"
    } else if(yp > rp && yp > bp) {
        clickableMin.style.backgroundImage = "url(images/yellowonion.png)"
    } else {
        clickableMin.style.backgroundImage = "url(images/greyonion.png)"
    }
}
// test code test code wakatime please load test code test code wakatime i crode test test test 
statsTitle.addEventListener('mousedown', () => {
    if(statsBar.style.width == "50px") {
        openStats();
    } else {
        closeStats();
    }
})
function closeStats() {
    statsTitle.style.transform = "translateX(0) translateY(0) rotate(270deg)"
    statsTitle.style.width = "260px"
    statsTitle.style.marginTop = "22vw"
    statsTitle.style.marginLeft = "-93px"
    statsBar.style.width = "50px"
    statsText.style.display = "none"
}
function openStats() {
    statsTitle.style.transform = "translateX(265px) translateY(-400px) rotate(0deg)"
    statsBar.style.width = "650px"
    statsText.style.display = "inline-block"
    statsText.style.textAlign = "left"
}
const rpppsstat = document.getElementById('rpppsstat');
const bpppsstat = document.getElementById('bpppsstat');
const ypppsstat = document.getElementById('ypppsstat');
const rpatstat = document.getElementById('rpatstat');
const bpatstat = document.getElementById('bpatstat');
const ypatstat = document.getElementById('ypatstat');
const tclickstat = document.getElementById('tclickstat');
const cpokostat = document.getElementById('cpokostat');
const ppsstat = document.getElementById('ppsstat');
const atpokostat = document.getElementById('atpokostat');
const clickatpokostat = document.getElementById('clickatpokostat');
const upstat = document.getElementById('upstat');
const tpstat = document.getElementById('tpstat');
const ppstat = document.getElementById('ppstat');
function statsUpdate() {
    rpppsstat.textContent = fixNoRound(rp * 0.1 * rpmulti * genmulti)
    bpppsstat.textContent = fixNoRound(bp * 0.1 * bpmulti * genmulti)
    ypppsstat.textContent = fixNoRound(yp * 0.1 * ypmulti * genmulti)
    tclickstat.textContent = totalClicks;
    // clickatpokostat.textContent = 
}
//    pokosgained = ((rp * 0.1 * rpmulti) + (bp * bpmulti) + (yp * 8 * ypmulti)) * genmulti;
