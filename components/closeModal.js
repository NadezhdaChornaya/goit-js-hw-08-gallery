import { refs } from "../refs/refs.js";

export const onCloseModal = () => {
    refs.modalWindow.classList.remove("is-open");
    refs.img.src = "";
    refs.img.alt = "";
}

export const onEscapeClose = (e) => {
    if (e.code === "Escape") {
        onCloseModal();
    };
}

window.addEventListener("keydown", onEscapeClose);
refs.modalWindow.addEventListener("click", onCloseModal);