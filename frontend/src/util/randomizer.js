/**
 * Generates a random number between min and max.
 * @param {number} min - The minimum value inclusive.
 * @param {number} max - The maximum value exclusive.
 * @returns {number} A random integer.
 */
export default function randomizer(min, max) { return min + Math.floor(Math.random() * (max - min)); };
