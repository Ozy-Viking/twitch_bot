// @ts-nocheck
import { getStyleSheet } from "./getStyleSheet.js";

/**
 * Modifies a select part of a stylesheet.
 * @param {string} element - The element of the css style sheet e.g "div".
 * @param {string} selector - The selector of the element e.g "font-size".
 * @param {string} value - The value to be set.
 * @param {string} stylesheetTitle - The title of the style sheet. If left empty, the first style sheet will be choosen.
 */
export default function modifyStyleSheet(element, selector, value, stylesheetTitle = "") {
    // Getting the stylesheet
    const stylesheet = getStyleSheet(stylesheetTitle);
    let elementRules;

    // looping through all its rules and getting your rule
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].selectorText === element) {
            elementRules = stylesheet.cssRules[i];
        }
    }
    // modifying the rule in the stylesheet
    elementRules.style.setProperty(selector, value);
}
