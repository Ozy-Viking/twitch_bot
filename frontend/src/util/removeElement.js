/**
 * Deletes an HTML element.
 * @param {string} ID - ID of the element to be deleted.  
 * @param {boolean} debug - Console.log(element) before deleting  
 */
export default function removeElement(ID, debug = false) {
    if (debug) { console.debug("ID", ID) }
    let element = document.getElementById(ID)
    if (element === null) { }
    if (debug) { console.debug("element", element) }
    try {
        // @ts-ignore
        element.remove()
    } catch (error) {
        console.error(ID, element, error)
    }
};
