import { refs } from "../refs/refs.js";

export const onImageClick = (e) => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") { return; }
    // console.log(e.target.dataset.source);

    refs.modalWindow.classList.add("is-open");
    refs.img.alt = e.target.alt;
    refs.img.src = e.target.dataset.source;

}

refs.gallery.addEventListener("click", onImageClick);