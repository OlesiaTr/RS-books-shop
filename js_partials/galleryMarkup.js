import { refs, galleryRefs } from "./refs.js";

refs.main.classList.add("main");
galleryRefs.list.classList.add("gallery");

const galleryMarkup = (data) => {
  const itemMarkup = data
    .map((book) => {
      return `            <li id=${book.id} class="gallery__item">
                <img src="${book.imageLink}" alt="${book.title}" class="gallery__img draggable__item" draggable='true'>
                <div class="gallery__wrap">
                <h2 class="gallery__title">${book.title}</h2>
                <h3 class="gallery__author">by ${book.author}</h3>
                <p class="gallery__price">Price: ${book.price}</p></div>
                <div class="gallery__btn-wrap">
                <button type="button" class="gallery__btn show-btn" data-modal-info-open id=${book.id}>Show more</button>
                <button type="button" class="gallery__btn add-btn" id=${book.id}>+ Add to cart</button></div>
            </li>`;
    })
    .join("");

  galleryRefs.list.insertAdjacentHTML("beforeend", itemMarkup);
  galleryRefs.container.appendChild(galleryRefs.list);
  refs.main.appendChild(galleryRefs.container);

  // const newRefs = {
  //   items: document.querySelectorAll(".gallery__item"),
  //   addBtns: document.querySelectorAll(".add-btn"),
  //   showBtns: document.querySelectorAll(".show-btn"),
  // };
};

export { galleryMarkup };
