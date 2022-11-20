import { refs, galleryContainer, galleryList } from "./refs.js";

refs.main.classList.add("gallery");

const galleryMarkup = (data) => {
  const itemMarkup = data
    .map((book) => {
      return `            <li class="gallery__item">
                <img src="${book.imageLink}" alt="${book.title}" class="gallery_img">
                <h2 class="gallery__title">${book.title}</h2>
                <h3 class="gallery__author">by ${book.author}</h3>
                <p class="gallery__price">Price: ${book.price}</p>
                <button type="button" class="gallery__btn">Show more</button>
                <button type="button" class="gallery__btn">+ Add to cart</button>
            </li>`;
    })
    .join("");

  galleryList.insertAdjacentHTML("beforeend", itemMarkup);
  galleryContainer.appendChild(galleryList);
  refs.main.appendChild(galleryContainer);
};

export { galleryMarkup };
