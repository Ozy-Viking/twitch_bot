import React, { useState } from "react";
import "/src/stylesheets/base.css";
import "/src/stylesheets/koth.css";
import Hill from "./components/Hill.jsx";
import LastWinner from "./components/LastWinner.jsx";
import FightSquare from "./components/FightSquare.jsx";
import Weapon, { randomWeaponName } from "./components/Weapon.jsx";
import randomSide from "/src/util/randomSide.js";
import User from "./components/User.jsx";

export default function Koth() {
    const [userID, setUserID] = useState(0);

    return (
        <>
            {/* <LastWinner></LastWinner> */}
            <FightSquare></FightSquare>
            {/* <Hill></Hill> */}
            {/* <User id={userID}></User> */}
        </>
    );
}
