
import photoloader from "./photoloader.js";
let gallery = [];

function load() {
    let listPhotos = photoloader.loadRessource("/www/canals5/photobox/photos");
    return listPhotos.then(response => {
        gallery = response.photos;
        return gallery});
}   

export default {
    load
}