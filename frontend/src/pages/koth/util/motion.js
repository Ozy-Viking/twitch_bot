import randomSide from "/src/util/randomSide.js";
import randomizer from "/src/util/randomizer.js";
import removeElement from "/src/util/removeElement.js";
import { gsap } from "gsap";
// import { modifyStyleSheet } from "../util.js";
// import { loseSound } from "./sound.js";

const startTime = 0;
const motionUp1 = 1.5;
const motionUp2 = 1;
const motionDown1 = motionUp2 / 2;
const motionDown2 = 3;
const growDuration = 1;

export const motionUp = motionUp1 + motionUp2;
export const motionDown = motionDown1 + motionDown2;
export const victorsClaimToFameTime = 10;
export const winnerMotionLength = (
    startTime +
    motionUp1 +
    motionUp2 +
    victorsClaimToFameTime +
    motionDown1 +
    motionDown2
);

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

const moveLastWinner = "150"
const moveWinner = "35"

function winnerMoveByY(up = true, lastWinner = false) {

    if (up) {
        return lastWinner ? `-=${moveLastWinner}` : `-=${moveWinner}`
    } else {
        return lastWinner ? `+=${moveLastWinner}` : `+=${moveWinner}`
    }
}

export function riggedMotion(element, lastWinner = false) {
    winnerMotion(element, lastWinner, 4, true)
}

export function winnerMotion(element, lastWinner = false, scale = 2.5, rigged = false) {
    let riggedTitle;
    if (rigged) {
        riggedTitle = document.createElement("h1");
        riggedTitle.className = 'rigged'
        riggedTitle.innerText = '#RIGGED'
        element.appendChild(riggedTitle)
    }
    zIndex("-10", startTime * 1000, lastWinner)
    const disp = lastWinner ? document.getElementById("lastWinnerDiv") : document.getElementById("winnerDiv")
    disp.appendChild(element)
    try {
        gsap.set(element, { transformOrigin: "50% 100%" });
        gsap.set(element, { x: (innerWidth / 2) - 45, y: (innerHeight - 150), scale: 1.5 });
        gsap.to(element, { duration: growDuration, scale: scale, delay: startTime });
        // gsap.to(element, {duration: 0.1 , x: '-=20', repeat: 0, ease: Sine.easeInOut, delay: 0 });
        gsap.to(element, { duration: motionUp1, y: '-=220', yoyo: true, repeat: 0, ease: Sine.easeInOut, delay: startTime });
        zIndex("50", (motionUp1 + startTime) * 1000, lastWinner)
        if (rigged) {
            gsap.to(riggedTitle, { duration: 1, y: '-=50', repeat: 0, ease: Sine.easeInOut, delay: motionUp1 / 2 });
        }
        gsap.to(element, { duration: motionUp2, y: winnerMoveByY(false, lastWinner), yoyo: true, repeat: 0, ease: Sine.easeInOut, delay: (motionUp1 + startTime) });
    } catch (error) {
        console.error(error)
    }
}

function zIndex(value, delay = 0, lastWinner = false) {
    let divID;
    if (lastWinner) {
        divID = "#lastWinnerDiv"
    } else {
        divID = "#winnerDiv"
    }
    // setTimeout(modifyStyleSheet, delay, divID, "z-index", value) //Todo: Fix modifiy sheet.
}

export function winnerMotionExit(element, lastWinner = false) {
    try {
        gsap.to(element, { duration: motionDown1, y: winnerMoveByY(true, lastWinner), yoyo: true, repeat: 0, ease: Sine.easeInOut, delay: 0 });
        zIndex("-50", motionDown1 * 1000, lastWinner)
        gsap.to(element, { duration: motionDown2, y: '+=800', yoyo: true, repeat: 0, ease: Sine.easeInOut, delay: motionDown1 });
    } catch (error) {
        console.error(error)
    }
    setTimeout(removeElement, motionDown * 1000, element.id)
}


export function fighterAnimation(element) {
    gsap.to(element, { duration: 0.1, scale: 1.5 });
    gsap.to(element, { duration: 2, x: (innerWidth / 2) - 45, yoyo: true, repeat: 0, ease: Sine.easeInOut, delay: 0 });
    gsap.to(element, { duration: 0.9, y: (innerHeight - 200), yoyo: true, repeat: 0, ease: Power2.easeIn, delay: 0 });
    gsap.to(element, { duration: 0.6, y: (innerHeight - (300 + randomizer(150, 350))), yoyo: true, repeat: 0, ease: Sine.easeInOut, delay: .9 });
    gsap.to(element, { duration: 0.5, y: (innerHeight - 150), yoyo: true, repeat: 0, ease: Sine.easeInOut, delay: 1.5 });
};

export function yeet(id) {
    let element = document.getElementById(id);
    let x = randomizer(innerWidth * 2, innerWidth * 5);
    var random = Math.floor(Math.random() * 2) + 1;
    var rotZ = 180;
    switch (random) {
        case 1:
            rotZ = -180;
            x = x * -1;
            break;
        default:
            break;
    };
    gsap.to(element, { duration: 4, x: x, y: -700, rotationZ: rotZ, yoyo: true, repeat: 0, ease: Sine.easeInOut, delay: 0 });
    gsap.to(element, { duration: 1.5, y: '-=500', yoyo: true, repeat: 0, ease: Sine.easeInOut, delay: 0 });
    // loseSound(); // Todo: Fix Sound.
    setTimeout(removeElement, 4000, element.id)
};

export function randomSideMotion(element, side = null) {
    if (side == null) {
        side = randomSide();
    }
    gsap.set(element, { className: 'falling-element', x: innerWidth / 2, y: innerHeight - 150, z: 100 });
    gsap.to(element, { duration: 0.01, scale: 1.5 });
    if (side === 'left') {
        gsap.to(element, { duration: 7, x: (innerWidth * 2), rotationZ: 180, repeat: 0, delay: 0 });
        //gsap.to(element, {duration: 1 , y: (innerHeight - (150 + randomizer(400, 800))), yoyo: true, repeat: 0, delay: 0 });
        //gsap.to(element, {duration: 1.5 , y: '+=200', repeat: 0,  ease: Power2.easeIn, delay: 1.2 });
        gsap.to(element, { duration: 2, y: (innerHeight - (150 + randomizer(400, 800))), yoyo: true, ease: Back.easeOut, repeat: 0, delay: 0 });
    } else {
        gsap.to(element, { duration: 7, x: -(innerWidth * 2), rotationZ: -180, repeat: 0, delay: 0 });
        //gsap.to(element, {duration: 1 , y: (innerHeight - (150 + randomizer(400, 800))), yoyo: true, repeat: 0,delay: 0 });
        //gsap.to(element, {duration: 1.5 , y: (innerHeight - 150), yoyo: true, repeat: 0, ease: Sine.easeOut, delay: 2 });
        //gsap.to(element, {duration: 1.5 , y: '+=200', repeat: 0,  ease: Power2.easeIn, delay: 1.2 });
        gsap.to(element, { duration: 2, y: (innerHeight - (150 + randomizer(400, 800))), yoyo: true, ease: Back.easeOut, repeat: 0, delay: 0 });
    }
    setTimeout(removeElement, 7 * 1000, element.id);
}
