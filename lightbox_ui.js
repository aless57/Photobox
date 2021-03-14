
function display_lightbox(data) {
    let container = document.querySelector("#lightbox_container");
    let config = "https://webetu.iutnc.univ-lorraine.fr/";
    container.innerHTML = `
    <div id="lightbox">
    <div id="lightbox-head">
        <p id="lightbox_close">X</p>
        <h1 id="lightbox_title">${data.title}</h1>
    </div>

    <div id="lightbox-img">
        <img id="lightbox_full_img" src="${config + data.original.href}">
    </div>
</div>
    `
}

function show() {
    document.getElementById("lightbox").style.display = 'block';
}

function hide() {
    document.getElementById("lightbox").style.display = 'none';
}

export default {
    display_lightbox, 
    show, 
    hide
}