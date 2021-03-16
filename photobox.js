import gallery from "./gallery.js"
import gallery_ui from "./gallery_ui.js"

document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    gallery.load().then(gallery_ui.display_gallery)
  })
