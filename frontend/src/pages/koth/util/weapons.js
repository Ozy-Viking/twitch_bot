import * as images from "./ImageURLS.js";

export const weaponObjects = {
    teapot: {
        file: images.teapot,
        "tense 1": "the",
        "tense 2": "that",
        left: { transform: "rotate(45deg) translate(30px,-30px) scaleX(-1)" },
        right: { transform: "rotate(-45deg) translate(-30px,-30px)" },
        command: ["teapot", "tea", "pot"],
    },
    "number 1 fan finger": {
        file: images.no1,
        "tense 1": "the",
        "tense 2": "that",
        left: { transform: "rotate(45deg) translate(35px,-50px)" },
        right: { transform: "rotate(-45deg) translate(-35px,-50px)" },
        command: ["1", "one", "num", "finger"],
    },
    plunger: {
        file: images.plunger,
        "tense 1": "the",
        "tense 2": "that",
        left: { transform: "rotate(10deg) translate(55px,-20px)" },
        right: {
            transform: "rotate(-10deg) translate(-55px,-20px) scaleX(-1)",
        },
        command: ["plunger", "dunny", "toilet"],
    },
    doughnut: {
        file: images.doughnut,
        "tense 1": "the",
        "tense 2": "that",
        left: { transform: "rotate(30deg) translate(10px,-60px)" },
        right: { transform: "rotate(-30deg) translate(-10px,-60px)" },
        command: ["doughnut", "donut", "nut"],
    },
    thong: {
        file: images.thong,
        "tense 1": "the",
        "tense 2": "that",
        left: { transform: "rotate(30deg) translate(10px,-60px)" },
        right: { transform: "rotate(-30deg) translate(-10px,-60px)" },
        command: ["thong", "flip flop", "formal thong", "safety boot"],
    },
    "giant match": {
        file: images.match,
        "tense 1": "the",
        "tense 2": "that",
        left: { transform: "rotate(30deg) translate(40px,-20px)" },
        right: { transform: "rotate(-30deg) translate(-40px,-20px)" },
        command: ["fire", "match", "aussie summer"],
    },
    "frying pan": {
        file: images.pan,
        "tense 1": "the",
        "tense 2": "that",
        left: { transform: "rotate(0deg) translate(60px,-10px)" },
        right: { transform: "rotate(0deg) translate(-60px,-10px) scaleX(-1)" },
        command: ["pan", "hot flat", "pancake maker", "skillet", "iron"],
    },
    "butchered name": {
        file: images.Name_Butcher_4000,
        "tense 1": "a",
        "tense 2": "that",
        left: {
            transform: "rotate(10deg) translate(-30px,30px)",
            width: "50px",
        },
        right: {
            transform: "rotate(10deg) translate(-30px,30px)",
            width: "50px",
        },
        command: ["name", "murder", "butcher", "kill"],
    },
    boomerang: {
        file: images.Boomerang,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform: "rotate(-10deg) translate(60px,-10px)",
            width: "60px",
        },
        right: {
            transform: "rotate(-10deg) translate(-40px,-10px) scaleX(-1)",
            width: "60px",
        },
        command: ["boom", "rang"],
    },
    didgeridoo: {
        file: images.didgeridoo,
        "tense 1": "the",
        "tense 2": "that",
        left: { transform: "rotate(250deg) translate(-25px,35px)" },
        right: { transform: "rotate(10deg) translate(-35px,25px)" },
        command: ["didgeridoo", "pipe", "wind", "doo", "didg"],
    },
    "sausage sanga": {
        file: images.sausage_sanga,
        "tense 1": "the",
        "tense 2": "that",
        left: { transform: "rotate(0deg) translate(50px,20px)", width: "50px" },
        right: {
            transform: "rotate(0deg) translate(-30px,20px) scaleX(-1)",
            width: "50px",
        },
        command: ["sausage", "sandwich", "sanga", "snag", "bunning"],
    },
    "goon sack": {
        file: images.Goon_Sack,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform: "rotate(0deg) translate(45px,-20px)",
            width: "75px",
        },
        right: {
            transform: "rotate(0deg) translate(-30px,-20px) scaleX(-1)",
            width: "75px",
        },
        command: [
            "goon",
            "sack",
            "goon of fortune",
            "fancy",
            "fine dinning",
            "pillow",
        ],
    },
    poop: {
        file: images.poop,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform: "rotate(0deg) translate(55px,0px) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "rotate(0deg) translate(-30px,0px) scale(1.25)",
            width: "50px",
        },
        command: ["poo", "catpoo", "cat poo"],
    },
    nuke: {
        file: images.Nuke,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform: "rotate(0deg) translate(10px,-48px) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "rotate(0deg) translate(10px,-48px) scale(1.25)",
            width: "50px",
        },
        command: ["nuke", "boom", "explosion", "mushroom"],
    },
    "200 IQ": {
        file: images.IQ200,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform: "rotate(0deg) translate(45px,-20px) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "rotate(0deg) translate(-20px,-20px) scale(1.25)",
            width: "50px",
        },
        command: ["big brains", "smart", "smrt", "200", "IQ"],
    },
    "cat rocket": {
        file: images.Cat_Rocket,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform: "translate(50px,-20px) rotate(50deg) scale(1.25)",
            width: "50px",
        },
        right: {
            transform:
                "translate(-25px,-20px) rotate(-40deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        command: ["rocket", "bazooka", "rpg"],
    },
    "cat witch": {
        file: images.cat_witch,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform:
                "translate(50px,-20px) rotate(0deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        command: ["witch", "spell"],
    },
    "ghost cat": {
        file: images.GhostCat,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform: "translate(50px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        right: {
            transform:
                "translate(-25px,-20px) rotate(0deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        command: ["ghost", "scare"],
    },
    herd: {
        file: images.Herd,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform:
                "translate(50px,-20px) rotate(0deg) scaleX(-1) scale(1.3)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.3)",
            width: "50px",
        },
        command: ["herd", "9 tails", "whip"],
    },
    JDLove: {
        file: images.Holding_Heart_Cat,
        "tense 1": "",
        "tense 2": "",
        left: {
            transform:
                "translate(50px,-20px) rotate(0deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        command: ["heart", "hug", "love"],
    },
    "cat litter": {
        file: images.Litter_badge,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform:
                "translate(50px,-20px) rotate(0deg) scaleX(-1) scale(1.3)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.3)",
            width: "50px",
        },
        command: ["litter"],
    },
    "mad house": {
        file: images.Mad_House_2,
        "tense 1": "JD's",
        "tense 2": "that",
        left: {
            transform:
                "translate(50px,-20px) rotate(0deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        command: ["mad", "house"],
    },
    pumpkin: {
        file: images.Pumpkin,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform:
                "translate(50px,-20px) rotate(0deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        command: ["pumpkin"],
    },
    "purple conveyor belt": {
        file: images.purple,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform:
                "translate(50px,-20px) rotate(0deg) scaleX(-1) scale(1.5)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.5)",
            width: "50px",
        },
        command: ["purple", "conveyor", "belt"],
    },
    Ring: {
        file: images.Ring,
        "tense 1": "Sassy's",
        "tense 2": "that",
        left: {
            transform: "translate(50px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        command: ["ring", "where is it", "sassy"],
    },
    "lazy bot": {
        file: images.sleep,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform: "translate(50px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        command: ["sleep", "lazy", "bot"],
    },
    spaghetti: {
        file: images.Spaghetti,
        "tense 1": "JD's",
        "tense 2": "that",
        left: {
            transform:
                "translate(50px,30px) rotate(0deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,30px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        command: ["spag", "conveyor", "belt", "meal"],
    },
    CatCombat: {
        file: images.Wack,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform: "translate(50px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        right: {
            transform:
                "translate(-25px,-20px) rotate(0deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        command: ["bat", "paddle", "wack", "cat combat"],
    },
    "combat wombat": {
        file: images.Wombat,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform:
                "translate(50px,-20px) rotate(0deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        command: ["wombat", "wom", "combat"],
    },
};

export const weaponObjectsTesting = {
    "magic seabus": {
        file: images.seaBus,
        "tense 1": "the",
        "tense 2": "that",
        left: {
            transform:
                "translate(50px,-20px) rotate(0deg) scaleX(-1) scale(1.25)",
            width: "50px",
        },
        right: {
            transform: "translate(-25px,-20px) rotate(0deg) scale(1.25)",
            width: "50px",
        },
        command: ["seabus", "magic"],
    },
    "seabus club": {
        file: images.factorio,
        "tense 1": "a",
        "tense 2": "that",
        left: {
            transform: "translate(10px,0px) rotate(225deg) scaleY(-1)",
            width: "100px",
        },
        right: {
            transform: "translate(-20px,0px) rotate(-45deg);",
            width: "100px",
        },
        command: ["seabus club", "club"],
    },
};

export const secretWeapon = {
    name: "JD's Sexy Thong",
    takeoverName: "thong",
    file: images.secret_thong,
    "tense 1": "",
    "tense 2": "",
    left: { transform: "rotate(-30deg) translate(60px,20px)" },
    right: { transform: "rotate(30deg) translate(-35px,10px)" },
    command: ["thong", "flip flop", "formal thong", "safety boot"],
};

export const weaponNames = Object.keys(weaponObjects);
export const weaponCount = weaponNames.length;
export const weaponNamesTesting = Object.keys(weaponObjectsTesting);
export const weaponCountTesting = weaponNamesTesting.length;

// adds the name of each weapon for code readabilty
for (let i = 0; i < weaponNames.length; i++) {
    let weapon = weaponObjects[weaponNames[i]];
    weapon.name = weaponNames[i];
    weapon.regex = new RegExp(weapon.command.join("|"), "i");
}
// adds the name of each weapon for code readabilty
for (let i = 0; i < weaponNamesTesting.length; i++) {
    let weapon = weaponObjectsTesting[weaponNamesTesting[i]];
    weapon.name = weaponNamesTesting[i];
    weapon.regex = new RegExp(weapon.command.join("|"), "i");
}
