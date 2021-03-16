
import photoloader from "./photoloader.js";
var gallery;


function load() {
    return gallery = photoloader.loadRessource("/www/canals5/photobox/photos")
}

function next(){
    return gallery.then(response =>{
        return gallery = photoloader.loadRessource(response.links.next.href);
    })
}

function prev(){
    return gallery.then(response =>{
        return gallery = photoloader.loadRessource(response.links.prev.href);
    })
}

function first(){
    return gallery.then(response =>{
        return gallery = photoloader.loadRessource(response.links.first.href);
    })
}

function last(){
    return gallery.then(response =>{
        return gallery = photoloader.loadRessource(response.links.last.href);
    })
}



// function load2() {
//     let listPhotos = photoloader.loadRessource("/www/canals5/photobox/photos")
//          return listPhotos.then(response => {
//         if(response.ok) {
//             return response.json();
//         } else {
//             console.log("Response error : " + response.status)
//         }
//     })
//         .catch(error => {
//             console.log("Error : " + error);
//         })
// }
            

export default {
    load,
    prev,
    next,
    first,
    last,
    gallery
}