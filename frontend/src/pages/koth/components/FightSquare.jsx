import React, { Children, useEffect, useRef, useState } from "react";
import { server, testing } from "/src/pages/koth/util/KothParams.js";
import User from "/src/pages/koth/components/User.jsx";
import { notify, subscribe } from "/src/lib/streamerBot.js";
import {
    endingMessage,
    joinCommandRegex,
    noJoinMessage,
    updateMessage,
    updateMessageRegex,
} from "/src/pages/koth/util/messages.js";
import useWS from "/src/hooks/useWS.js";
import useCounter from "/src/hooks/useCounter.js";
import Weapon, {
    randomWeaponName,
    weaponRegex,
} from "/src/pages/koth/components/Weapon.jsx";

var battleActive = false;
var testData = {
    0: { name: "Ozy_Viking", message: "king" },
    1: { name: "JDPlays", message: "king thong" },
};

export default function FightSquare() {
    battleActive = true;
    const [userID, incrementUserID] = useCounter(0);
    const [usernames, setUsername] = useState([]);
    const [users, setUsers] = useState({});

    function addUser(userID, username, lowerMessage) {
        if (!usernames.includes(username)) {
            setUsername(usernames.push(username));
            users[userID] = { name: username, message: lowerMessage };
            console.log(users);
            setUsers(users);
        }
    }

    const { ws, ready } = useWS();

    ws.onopen = () => {
        subscribe(ws);
        ws.onmessage = function (event) {
            const msg = event.data;
            const wsdata = JSON.parse(msg);
            if (typeof wsdata.data != "undefined") {
                if (typeof wsdata.data.message != "undefined") {
                    let lowerMessage =
                        wsdata.data.message.message.toLowerCase();
                    let username = wsdata.data.message.displayName;
                    if (addFighterLogic(lowerMessage, username, usernames)) {
                        addUser(userID, username.toLowerCase(), lowerMessage);
                        incrementUserID();
                    }
                }
            }
        };
    };
    console.log(keys(users));
    return (
        <div id="fight_square" className="confetti-container">
            {keys(users).length == 0
                ? []
                : keys(users).map(([tid, i, arr]) => (
                      <User
                          key={tid}
                          uid={tid}
                          username={users[tid].name}
                          lowerMessage={users[tid].message}
                      />
                  ))}
        </div>
    );
}

function keys(obj) {
    return [...Object.keys(obj)];
}

function addFighterLogic(lowerMessage, username, usernames) {
    if (
        !(
            joinCommandRegex.exec(lowerMessage) != null &&
            updateMessageRegex.exec(lowerMessage) == null
        )
    ) {
        return false;
    }
    if (battleActive) {
        console.warn(!usernames.includes(username));
        return testing ? true : !usernames.includes(username);
    } else {
        return false;
    }
}

function fightSequence(websocket) {
    // console.log('Start Fight: onopen')
    if (riggedWinners.length) {
        winner = riggedWinners[Randomizer(0, riggedWinners.length)];
    } else {
        winner = Math.floor(Math.random() * divnumber);
    }
    if (divnumber == 0) {
        // **** No users here - need to handle ****
        // file deepcode ignore UsageOfUndefinedReturnValue: Not an issue.
        // deepcode ignore CodeInjection: No code injection possible here.
        setTimeout(notify, 10000, websocket, noJoinMessage);
    } else {
        var user = document.getElementById(winner).getAttribute("user");
        var winweapon = document.getElementById(winner).getAttribute("weapon");
        yeetathon(winner);
        // 17000
        setTimeout(changeVolume, 0, 0, 0.1, 2500);
        setTimeout(changeVolume, totalYeetTime * 1000, 0, 0, 2500);
        setTimeout(
            winnerTime,
            (totalYeetTime + delayToCeremony) * 1000,
            winner,
            winnerNotification(user, weaponObjects[winweapon])
        );
        setTimeout(
            setWinner,
            totalYeetTime + delayToCeremony + motionUp + victorsClaimToFameTime,
            user
        );
        // deepcode ignore CodeInjection: Code Injection is not possible.
        setTimeout(closeWS, postGameLength * 1000, ws);
    }
}

function yeetathon(winner) {
    // var yeetUser;
    var yeetTime;
    var numbers = new Array(divnumber);
    for (let i = 0; i < divnumber; i++) {
        numbers[i] = i;
    }
    numbers.sort(() => Math.random() - 0.5);
    for (let i = 0; i < divnumber; i++) {
        if (numbers[i] != winner) {
            // yeetUser = document.getElementById(numbers[i]);
            yeetTime = (i * (totalYeetTime * 1000)) / divnumber;
            setTimeout(yeet, yeetTime, numbers[i]);
            // console.log(`yeeting ID (${i}): ${yeetUser.getAttribute("user")}`);
        }
    }
}

// function addFighter(user, lowerMessage) {
//     var username = user.toLowerCase();
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var addToFight = true;
//             if (battleActive) {
//                 if (!testing) {
//                     for (let i = 0; i < divnumber; i++) {
//                         let checkUser = document.getElementById(i).getAttribute("user");
//                         if (user == checkUser) {
//                             addToFight = false;
//                         };
//                     };
//                 };
//             } else {
//                 addToFight = false;
//             };
//             if (addToFight) {
//                 var warp = document.getElementById("confetti-container"),
//                     innerWidth = window.innerWidth,
//                     innerHeight = window.innerHeight;

//                 // Load into page
//                 var Div = document.createElement('div');
//                 Div.id = divnumber;
//                 Div.setAttribute("user", user);
//                 divnumber++;
//                 Div.style.background = `url(${xhttp.responseText})`;
//                 Div.style.backgroundSize = '100% 100%';

//                 var weapon = usersWeapon(lowerMessage);
//                 var side = randomSide();
//                 Div.setAttribute("side", side);
//                 if (weapon.name == gstring.name) {
//                     riggedWinners.push(Div.id)
//                 }
//                 Div.setAttribute("weapon", `${weapon.name}`)
//                 Div.innerHTML = `<img style='${weapon[side]}' src='static/images/${weapon.file}'/>`;

//                 switch (side) {
//                     case 'left':
//                         // left - TweenLite.set(Div, { className: 'lurking-element', x: -600, y: Randomizer(0, innerHeight-600 ), z:0 });
//                         TweenLite.set(Div, { className: 'falling-element', x: -75, y: innerHeight - 113, z: 0 });
//                         fighterAnimation(Div);
//                         break;
//                     default:
//                         TweenLite.set(Div, { className: 'falling-element', x: innerWidth, y: innerHeight - 110, z: 0 });
//                         fighterAnimation(Div);
//                         break;
//                 }
//                 warp.appendChild(Div);
//             }
//         }
//     };
//     xhttp.open("GET", "https://decapi.me/twitch/avatar/" + username, true);
//     xhttp.send();
// };