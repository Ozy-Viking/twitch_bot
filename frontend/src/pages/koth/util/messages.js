import { randomWeaponName } from "/src/pages/koth/components/Weapon.jsx";
import { championName, hillName, joinCommand } from "/src/pages/koth/util/KothParams.js";
import { weaponNames } from "/src/pages/koth/util/weapons.js";
import randomizer from "/src/util/randomizer.js";


export const joinCommandRegex = new RegExp(joinCommand, "i");
export const battleGround = `${championName} of the ${hillName}`;
export const noJoinMessage = `No one joined, so no new ${battleGround}!`;
export const winnerMessage = `is the new ${battleGround}`;
export const updateMessage = `seconds left to join the fight! Type ${joinCommand} to see if you can take the title of ${battleGround}!`;
export var altEndingMessages = [];
export const endingMessage = generateEndingMessage();
export const updateMessageRegex = new RegExp(
    `${updateMessage.toLowerCase()}|${endingMessage.toLowerCase()}|${noJoinMessage.toLowerCase()}`,
    "i"
);

function generateEndingMessage() {
    let endingChoice = randomizer(0, (weaponNames.length + altEndingMessages.length - 1));
    if (endingChoice < altEndingMessages.length) {
        return altEndingMessages[endingChoice];
    } else {
        let randWeapon = randomWeaponName()
        return `The fight is coming to an end! Get back, Back, no more people. OI! Who threw ${randWeapon['tense 2']} ${randWeapon.name}!?!`;
    }
};
