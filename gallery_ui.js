
function display_gallery(gallery)  {
    let div = document.querySelector('#gallery_container');
    gallery.forEach(photo => {
        let divTmp = document.createElement("div");
        let id = photo.then(response =>response.photo.id);
        let file = photo.then(response =>response.photo.file)
        divTmp.className = "vignette"
        divTmp.innerHTML = ` <img data-uri="/www/canals5/photobox/photos/${id}"
        src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${file}">`
    });

    
}

export default {
   display_gallery     
}