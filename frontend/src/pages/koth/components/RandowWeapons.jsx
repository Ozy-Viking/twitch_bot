import React from "react";
import useCounter from "/src/hooks/useCounter.js";

export default function RandowWeapons(max = 100) {
    const [weaponID, incremenWeaponID] = useCounter();
    return <div>RandowWeapons</div>;
}
