
function display_gallery(gallery)  {
    let container = document.querySelector('#gallery_container');
    let config = "https://webetu.iutnc.univ-lorraine.fr/";
    console.log(gallery)
    container.innerHTML = gallery.photos.reduce((acc, elem) => {
        return acc + `
        <div class = "vignette">
            <img data-img = "${elem.photo.original.href}" data-uri = "${elem.links.self.href}" src = "${config + elem.photo.thumbnail.href}">
        </div>
        `
    }, '')
}

export default {
   display_gallery     
}