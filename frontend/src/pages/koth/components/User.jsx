import React, { Children, useEffect, useState } from "react";
import Weapon from "/src/pages/koth/components/Weapon.jsx";

export default function User({
    uid,
    username = "Ozy_Viking",
    lowerMessage = "",
    rigged = false,
}) {
    const [avatar, setAvatar] = useState("");
    const [ready, setReady] = useState(false);
    useEffect(() => {
        fetch(fetchAvatarURL(username))
            .then((response) => response.text())
            .then((url) => {
                setAvatar(`url('${url}')`);
                setReady(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [username]);

    let user = (
        <div
            id={uid}
            className="centre"
            style={{
                backgroundImage: avatar,
                backgroundSize: "100% 100%",
                opacity: 1,
            }}
        >
            <Weapon lowerMessage={lowerMessage} />
        </div>
    );

    return ready ? user : <></>;
}

function fetchAvatarURL(username = "Ozy_Viking") {
    return `https://decapi.me/twitch/avatar/${username}`;
}
