import photoloader from "./photoloader.js";

function load(node) {
    var test = node.childNodes[1].getAttribute("data-uri")
    return photoloader.loadRessource(test);
}

export default {
    load
}