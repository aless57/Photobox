
function display_lightbox(data) {
    let container = document.querySelector("#lightbox_container");
    let config = "https://webetu.iutnc.univ-lorraine.fr/";
    container.innerHTML = `
    <div id="lightbox">
    <div id="lightbox-head">
        <p id="lightbox_close">X</p>
        <h1 id="lightbox_title">${data.photo.titre}</h1>
    </div>

    <div id="lightbox-img">
        <button id = "prev-img"> <-- </button>
        <img id="lightbox_full_img" src="${config + data.photo.url.href}">
        <button id = "next-img"> --> </button>
    </div>
    <div id = "infos-photo">
         <h1> Description : ${data.photo.descr} </h1>
         <h1> Format : ${data.photo.format} </h1>
    </div>
</div>
    `
    document.querySelector('#lightbox_close').addEventListener('click', e => {
        hide();
    })
}

function show() {
    document.getElementById("lightbox").classList.toggle("lightbox");
}

function hide() {
    document.getElementById("lightbox").classList.toggle("hide");
}

export default {
    display_lightbox, 
    show, 
    hide
}