import gallery from "./gallery.js"
import gallery_ui from "./gallery_ui.js"
import lightbox_ui from "./lightbox_ui.js"
import lightbox from "./lightbox.js"


document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    gallery.load().then(gallery_ui.display_gallery)
  })

document.querySelector('#lightbox_close').addEventListener('click', e => {
  lightbox_ui.hide(); 
})

document.querySelector(".vignette").addEventListener('click', e => {
  lightbox.load(e).then(lightbox_ui.display_lightbox)
})

  



  
