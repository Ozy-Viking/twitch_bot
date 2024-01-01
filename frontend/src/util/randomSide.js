export const sides = ['left', 'right'];

/**
 * Generates a random side.
 * @param {string} side - A choosen side.
 * @returns {string} A side.
 */
export default function randomSide(side = "") {
    if (side != "") { return side }
    side = sides[Math.floor(Math.random() * 2)]
    return side;
};
