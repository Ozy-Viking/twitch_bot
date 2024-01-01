import React, { useEffect, useState } from "react";
import { server as srv } from "/src/pages/koth/util/KothParams.js";

export default function useWS(server=srv) {
    const [ws, setWS] = useState(newWebSocket(server))
    const [ready, setReady] = useState(ws.readyState === 1)

    useEffect(() => {
        setTimeout(wsReady, 20, ws, setReady)
    }, [ready])
    useEffect(() => {
        setWS(newWebSocket(server))
    }, [srv])

    if (srv == undefined) {
        return undefined;
    }
    return { ws, ready };
}


function newWebSocket(server) {
    if (server == undefined) {
        console.warn("Server undefined.");
        return
    }
    return new WebSocket(server)
}

export function wsReady(webSocket, setReady = null) {
    if (setReady == null) { return webSocket.readyState == 1 }
    if (webSocket.readyState == 1) {
        setReady(true)
    } else {
        setTimeout(wsReady, 20, webSocket, setReady)
    }
    return webSocket.readyState == 1
}