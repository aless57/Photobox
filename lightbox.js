import photoloader from "./photoloader.js";
import lightbox_ui from "./lightbox_ui.js";

var photoCourante;
var commentaire;

function load(node) {
    photoCourante = node;
    var test = node.childNodes[1].getAttribute("data-uri")
    commentaire = photoloader.loadRessource(test).then(element => element.links.comments.href).then(element => photoloader.loadRessource(element))
    let res = Array(photoloader.loadRessource(test), commentaire)
    console.log(res)
    console.log(commentaire)
    console.log(photoloader.loadRessource(test))
    console.log(res[0])
    return photoloader.loadRessource(test);
}

function next() {
    if (photoCourante.nextElementSibling === null){
        let container = document.getElementById("gallery_container")
        load(container.firstElementChild).then(lightbox_ui.display_lightbox)
    }else{
        load(photoCourante.nextElementSibling).then(lightbox_ui.display_lightbox)
    }
}

function prev() {
    if (photoCourante.previousElementSibling === null){
        let container = document.getElementById("gallery_container")
        load(container.lastElementChild).then(lightbox_ui.display_lightbox)
    }else{
        load(photoCourante.previousElementSibling).then(lightbox_ui.display_lightbox)
    }

}

export default {
    load,
    next,
    prev,
    commentaire
}