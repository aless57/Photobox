import photoloader from "./photoloader.js";

var photoCourante = node.childNodes[1];

function load(node) {
    var test = node.childNodes[1].getAttribute("data-uri")
    //console.log(photoloader.loadRessource(test));
    return  photoloader.loadRessource(test);
}

function next() {
    load()
}

function prev() {
    
}

export default {
    load
}