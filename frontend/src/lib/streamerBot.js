import { wsReady } from "/src/hooks/useWS.js";
import { botID } from "/src/pages/koth/util/KothParams.js";

export function subscribe(websocket, bot = botID, events = ["ChatMessage"]) {
    send("Subscribe", websocket, bot, events)
};

export function unsubscribe(websocket, bot = botID, events = ["ChatMessage"]) {
    send("UnSubscribe", websocket, bot, events)
};

function send(requestType, websocket, bot, events) {
    if (wsReady(websocket)) {
        websocket.send(
            JSON.stringify({
                request: requestType,
                events: {
                    Twitch: events,
                },
                id: bot,
            })
        );
    };
}

export function notify(websocket, message, botID = "123") {
    console.log(message);
    websocket.send(
        JSON.stringify({
            request: "DoAction",
            action: {
                name: "FightMessage",
            },
            args: {
                rawInput: message,
            },
            id: botID,
        })
    );
}
