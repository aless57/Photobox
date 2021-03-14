import photoloader from "./photoloader.js";

function load(node) {
    return photoloader.loadRessource(node);
}

export default {
    load
}