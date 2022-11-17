import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryMain = document.querySelector(".gallery");
const imagesCreated = createGalleryItems(galleryItems);
galleryMain.insertAdjacentHTML("beforeend", imagesCreated);
galleryMain.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source} "width = 1200"">
`);

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  instance.show();
}

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) =>
        `<a class="gallery__link" href="large-image.jpg">
   <img
     class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
   />
 </a>`
    )
    .join("");
}
console.log(galleryItems);
