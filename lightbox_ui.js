import lightbox from "./lightbox.js";
import photoloader from "./photoloader.js";

function display_lightbox(data) {
    let container = document.querySelector("#lightbox_container");
    let config = "https://webetu.iutnc.univ-lorraine.fr/";
    let linkCom = data.links.comments;
    let lesComPromise = photoloader.loadRessource(linkCom.href)
    console.log(lesComPromise)
    lesComPromise.then()
    // let lesCom = lightbox.commentaire.comments.reduce((acc, elem) => {
    //         return acc + `
    //         <h2> ID : ${elem.comments.id}</h2>
    //         <h2> Titre : ${elem.comments.titre}</h2>
    //         <h2> Pseudo : ${elem.comments.pseudo}</h2>
    //         <h2> Content : ${elem.comments.content}</h2>
    //         <h2> Date : ${elem.comments.date}</h2>`
    //     });
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
         <h1> Les commentaires : </h1>
    </div>
</div>
    `
    document.querySelector('#lightbox_close').addEventListener('click', e => {
        hide();
    })

    document.querySelector('#prev-img').addEventListener('click', evt => {
        lightbox.prev()
    })

    document.querySelector('#next-img').addEventListener('click',evt => {
        lightbox.next()
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