// @ts-nocheck
/**
 * Returns the requested style sheet. If there is only 1 sheet ot title left blank it will return that sheet.
 * @param {string} title - The unique title of the stylesheet.
 * @returns {CSSStyleSheet} The requested style sheet.
 */
export default function getStyleSheet(title = "") {
    if (document.styleSheets.length === 1 || title === "") {
        return document.styleSheets[0]
    }
    for (const sheet of document.styleSheets) {
        console.log(sheet.title)
        if (sheet.title === title) {
            return sheet;
        }
    }
}
