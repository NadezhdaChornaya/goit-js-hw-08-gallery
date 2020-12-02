import galleryItems from "./gallery-items.js";
import { refs } from "./refs/refs.js";
import { onImageClick } from "./components/openModal.js";
import { onCloseModal } from "./components/closeModal.js";
import { onEscapeClose } from "./components/closeModal.js";



let index = 0;
let createMarkupGallery = galleryItems.reduce((acc, galleryItem) => {
  index += 1;
  let amarkupGallery = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${galleryItem.original}"
  >
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      data-index="${index}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`
  return acc += amarkupGallery;


}, "")


refs.gallery.insertAdjacentHTML("afterbegin", createMarkupGallery);


