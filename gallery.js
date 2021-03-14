
import photoloader from "./photoloader.js";
var gallery = [];


function load() {
    return photoloader.loadRessource("/www/canals5/photobox/photos")
}



function load2() {
    let listPhotos = photoloader.loadRessource("/www/canals5/photobox/photos")
         return listPhotos.then(response => {
        if(response.ok) {
            return response.json();
        } else {
            console.log("Response error : " + response.status)
        }
    })
        .catch(error => {
            console.log("Error : " + error);
        })
}
            

export default {
    load,
    gallery
}