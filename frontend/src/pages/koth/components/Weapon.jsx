import React, { useEffect, useState } from "react";
import {
    secretWeapon,
    weaponCount,
    weaponNames,
    weaponObjects,
} from "../util/weapons.js";
import randomizer from "../../../util/randomizer.js";
import { gstringProb } from "/src/pages/koth/util/KothParams.js";
import randomSide from "/src/util/randomSide.js";

export default function Weapon({ lowerMessage, side=undefined, random = false }) {
    const [weaponName, setWeaponName] = useWeaponName(lowerMessage);
    if (weaponName == undefined) {
        setWeaponName(randomWeaponName());
    }
    let weapon = weaponObjects[weaponName];
    if (side==undefined){
        side=randomSide()
    }
    if (weapon.name === secretWeapon.takeoverName) {
        if (randomizer(0, gstringProb) == 0) {
            weapon = secretWeapon;
        }
    }
    let style = random ? {} : weapon[side];
    return <img style={style} src={weapon.file} />;
}

export function randomWeaponName() {
    return weaponNames[randomizer(0, weaponCount)];
}

function useWeaponName(lowerMessage) {
    let name = () => {
        let n = weaponRegex(lowerMessage);
        if (n == undefined) {
            n = randomWeaponName();
            return n;
        }
    };
    const [weaponName, setWeaponName] = useState(name());
    useEffect(() => {
        setWeaponName(name());
    }, [lowerMessage]);
    return [weaponName, setWeaponName];
}

export function weaponRegex(lowerMessage) {
    let choosenWeapon = undefined;
    let weapon;

    for (let i in weaponNames) {
        weapon = weaponObjects[weaponNames[i]];
        if (weapon.regex.exec(lowerMessage) != null) {
            choosenWeapon = weapon;
        }
    }
    return choosenWeapon;
}
