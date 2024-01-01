import randomSide from "/src/util/randomSide.js";
import { weaponCount, weaponNames } from "/src/pages/koth/util/weapons.js";


export const urlParams = new URLSearchParams(window.location.search);

const classicNegation = ["false", "no"]

export const botID = urlParams.get('botID') ? urlParams.get('botID') : "123";
export const championName = urlParams.get('championName') ? urlParams.get('championName') : "King";
export const gameLength = Number(urlParams.get('gameLength')) ? Number(urlParams.get('gameLength')) : 60;
export const gstringProb = Number(urlParams.get('gstringProb')) ? Number(urlParams.get('gstringProb')) : 1000;
export const hillName = urlParams.get('hillName') ? urlParams.get('hillName') : "Hill";
export const joinCommand = urlParams.get('joinCommand') ? urlParams.get('joinCommand').toLowerCase() : "king";
export const reset = ![null, ...classicNegation].includes(urlParams.get('reset'));
export const riggedUsers = ['Ozy_Viking', 'sassysarrah5', 'gotobedchild', ...urlParams.getAll('riggedUser')];
export const wsPort = urlParams.get('wsPort') ? urlParams.get('wsPort') : "29080"; // todo: change to default 8080
export const server = urlParams.get('server') ? `ws://${urlParams.get('server')}:${wsPort}/` : `ws://localhost:${wsPort}/`;
export const showLastWinner = !(["false", "no"].includes(urlParams.get('lastWinner')))
export const testing = !([null, ...classicNegation].includes(urlParams.get('testing')));
export const massTesting = !([null, ...classicNegation].includes(urlParams.get('massTesting')));
export const winStreak = winStreakNumber()
export const winner = urlParams.get('winner') ? Number(urlParams.get('winner')) : Infinity;
export const winStreakOrder = winStreakOrderCondition(urlParams.get('consecutive'))
export const debug = winStreakOrderCondition(urlParams.get('debug'))
export const innerHeight = window.innerHeight;
export const innerWidth = window.innerWidth;


export default function settings() {
    return {
        "botID": botID,
        "championName": championName,
        "gameLength": gameLength,
        "gstringProb": gstringProb,
        "hillName": hillName,
        "joinCommand": joinCommand,
        "reset": reset,
        "riggedUsers": riggedUsers,
        "wsPort": wsPort,
        "server": server,
        "showLastWinner": showLastWinner,
        "testing": testing,
        "winStreak": winStreak,
        "winStreakOrder": winStreakOrder,
        "debug": debug,
        "massTesting": massTesting
    }
}

function winStreakNumber(winStreakParam = null) {
    winStreakParam = winStreakParam ? winStreakParam : urlParams.get('winStreak');
    if (["false", "no", "0"].includes(winStreakParam)) {
        return null
    } else if (Number(winStreakParam) > 0) {
        return Number(winStreakParam)
    } else {
        return 3
    }
}

function winStreakOrderCondition(value) {
    if (["any", ...classicNegation].includes(value)) {
        return "any"
    } else if (["both", "either", "all"].includes(value)) {
        return "both"
    } else {
        return "consecutive"
    }
}

export var weaponName = urlParams.get("weapon") ? urlParams.get("weapon") : weaponName = weaponNames[weaponCount - 1]
export var side = randomSide(urlParams.get("side"))