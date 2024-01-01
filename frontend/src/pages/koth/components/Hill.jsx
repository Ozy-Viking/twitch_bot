import React from "react";
import { useSearchParams } from "react-router-dom";
import {
    Grassy_Hill,
    King_of_the_hill_barrows_edition_2 as halloween2,
    King_of_the_hill_barrows_edition as halloween1,
} from "../util/ImageURLS.js";

const hillImages = {
    halloween: [halloween1, halloween2],
    default: [Grassy_Hill],
};

export default function Hill() {
    // @ts-ignore
    let [searchParams, setSearchParams] = useSearchParams();

    let hillChoice = searchParams.get("hill")
        ? searchParams.get("hill")
        : "default";
    let hillImageType;
    let hillVarient;

    // @ts-ignore
    switch (hillChoice.toLowerCase()) {
        case "halloween":
            hillImageType = hillImages.halloween;
            break;
        default:
            hillImageType = hillImages.default;
            break;
    }

    try {
        hillVarient = Number(searchParams.get("hillVarient"))
            ? Number(searchParams.get("hillVarient"))
            : 0;
    } catch (error) {
        hillVarient = 0;
    }
    let imagePath = hillImageType[hillVarient];

    return (
        <img id="grassyhill_id" src={imagePath} className="grassyhill"></img>
    );
}

// Todo: Ensure hill duration is set correctly.
// Todo: Use tweenmax for hill animation.
