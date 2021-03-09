
import photoloader from "./photoloader.js";
var gallery = [];

function load() {
    let listPhotos = photoloader.loadRessource("/www/canals5/photobox/photos");
    return listPhotos.then(response => {
        gallery = response.photos;
        console.log(gallery)
        return gallery});
        
}   

export default {
    load,
    gallery
}