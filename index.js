import galleryItems from "./gallery-items.js";

const refs = {
    gallery: document.querySelector(".gallery"),
};

let createMarkupGallery = galleryItems.reduce((acc, galleryItem) => {
    let amarkupGallery = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${galleryItem.original}"
  >
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`
    return acc += amarkupGallery;

}, "")


refs.gallery.insertAdjacentHTML("afterbegin", createMarkupGallery);




// const createMarkupGallery = gallery.reduce((acc, image) => {
//     let liItem = document.createElement("li");
//     liItem.classList.add("gallery__item");
//     let aItem = document.createElement("a");
//     aItem.classList.add("gallery__link");
//     aItem.setAttribute("href", image.original);
//     let imgItem = document.createElement("img");
//     imgItem.classList.add("gallery__image");
//     imgItem.setAttribute("scr", image.preview);
//     imgItem.setAttribute("data-source", image.original);
//     imgItem.setAttribute("alt", image.description);
//     aItem.append(imgItem);
//     liItem.append(aItem);
//     acc.push(liItem);

//     return acc;
// }, []);

// console.log(createMarkupGallery);
// // galleryRef.append(...createMarkupGallery);
