// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
const cardsMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML(`beforeend`, cardsMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
    
    `<li>
        <a class="gallery__item"
            href="${original}"
            onclick = "return false">
        <img class="gallery__image"
            src="${preview}" 
            alt="${description}"/>
        </a>
        </li>`)
    .join("");
};

const lightbox = new SimpleLightbox('.gallery a', { 
    overlay : true,
    overlayOpacity : 0.8,
    captionsData : `alt`,
    captionDelay: 250,
    captionPosition: "bottom",
});

