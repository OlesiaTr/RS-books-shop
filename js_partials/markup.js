import {
  refs,
  galleryRefs,
  headerRefs,
  cartRefs,
  modalRefs,
  storeRefs,
} from "./refs.js";
import { infoModal, cartModal } from "./modal.js";

refs.main.classList.add("main");
galleryRefs.list.classList.add("gallery");

const headerMarkup = () => {
  cartRefs.counter.classList.add("cart__item-counter");

  const svg = `<svg width="40" height="40" aria-label="Toggles cart">
                        <use class="cart__icon" href="./imgs/symbol-defs.svg#icon-cart"></use>
                    </svg>`;

  cartRefs.btn.classList.add("cart__btn");
  cartRefs.btn.type = "button";
  cartRefs.btn.dataset.cartOpen = "";
  cartRefs.btn.insertAdjacentHTML("beforeend", svg);
  cartRefs.btn.appendChild(cartRefs.counter);

  cartRefs.title.classList.add("cart__title");
  cartRefs.title.innerHTML = "Cart";

  cartRefs.container.classList.add("cart-wrapper");
  cartRefs.container.appendChild(cartRefs.title);
  cartRefs.container.appendChild(cartRefs.btn);

  const title = `<h1 class="header__title"> The <span class="header__logo--accent">Strange</span>
                    Library</h1>`;

  headerRefs.logo.classList.add("header__logo");
  headerRefs.logo.href = `./index.html`;
  headerRefs.logo.insertAdjacentHTML("beforeend", title);

  headerRefs.section.classList.add("header__section");
  headerRefs.section.appendChild(headerRefs.logo);
  headerRefs.section.appendChild(cartRefs.container);

  headerRefs.container.appendChild(headerRefs.section);

  refs.header.classList.add("header");
  refs.header.appendChild(headerRefs.container);
};

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
};

const bookInfoMarkup = (book, item) => {
  const svgBtn = `<button class="modal__close--btn" data-modal-info-close>
                <svg  width="40px" height="40px">
                    <use href="./imgs/symbol-defs.svg#icon-close" class="modal__close--icon"></use>
                </svg>
            </button>`;

  modalRefs.btn.classList.add("gallery__btn");
  modalRefs.btn.classList.add("info__btn");
  modalRefs.btn.type = "button";
  modalRefs.btn.id = book.id;
  modalRefs.btn.innerText = "+ Add to cart";

  modalRefs.desc.classList.add("info__desc");
  modalRefs.desc.innerHTML = book.description;

  modalRefs.wrap.classList.add("info__wrap");
  modalRefs.wrap.appendChild(modalRefs.desc);
  modalRefs.wrap.appendChild(modalRefs.btn);

  modalRefs.img.classList.add("info__img");
  modalRefs.img.src = book.imageLink;
  modalRefs.img.alt = book.title;

  modalRefs.modalContainer.classList.add("modal");
  modalRefs.modalContainer.innerHTML = svgBtn;
  modalRefs.modalContainer.appendChild(modalRefs.img);
  modalRefs.modalContainer.appendChild(modalRefs.wrap);

  modalRefs.bgContainer.classList.add("modal__bg");
  modalRefs.bgContainer.dataset.modalInfo = "";
  modalRefs.bgContainer.appendChild(modalRefs.modalContainer);

  modalRefs.container.appendChild(modalRefs.bgContainer);

  item.childNodes[5].appendChild(modalRefs.container);
  refs.body.classList.add("no-scroll");
  infoModal();
};

const cartMarkup = (cart) => {
  const itemMarkup = [...cart]
    .map((item) => {
      return `            <li class="cart__item" id=${item.id}>
                <img src="${item.imageLink}" alt="${item.title}" class="cart__img">
                <div class="cart__wrap">
                    <p class="cart__author">${item.author}</p>
                    <p class="cart__book-title">${item.title}</p>
                    <p class="cart__price">${item.price}</p>
                </div>
                <button class="cart__close--btn">
                    <svg width="40px" height="40px">
                        <use href="./imgs/symbol-defs.svg#icon-close" class="cart__close--icon"></use>
                    </svg>
                </button>
            </li>`;
    })
    .join(" ");

  const price = [...cart].map((item) => item.price).reduce((a, b) => a + b, 0);
  console.log(price);

  storeRefs.list.classList.add("cart__list");
  storeRefs.list.innerHTML = itemMarkup;

  const svgBtn = `<button class="modal__close--btn" data-cart-close>
              <svg  width="40px" height="40px">
                  <use href="./imgs/symbol-defs.svg#icon-close" class="modal__close--icon"></use>
              </svg>
          </button>`;

  storeRefs.clearBtn.classList.add("gallery__btn", "cart__btn");
  storeRefs.clearBtn.type = "button";
  storeRefs.clearBtn.innerText = "Clear all";

  storeRefs.orderBtn.classList.add("gallery__btn", "cart__link");
  storeRefs.orderBtn.href = "./form.html";
  storeRefs.orderBtn.innerText = "Confirm order";

  storeRefs.wrapBtn.classList.add("cart__wrap--btn");
  storeRefs.wrapBtn.append(storeRefs.orderBtn, storeRefs.clearBtn);

  storeRefs.total.classList.add("cart__total");
  storeRefs.total.innerText = `Total sum: ${price}`;

  storeRefs.modalContainer.classList.add("modal", "cart__modal");
  storeRefs.modalContainer.innerHTML = svgBtn;
  storeRefs.modalContainer.append(
    storeRefs.total,
    storeRefs.list,
    storeRefs.wrapBtn
  );

  storeRefs.bgContainer.classList.add("modal__bg");
  storeRefs.bgContainer.dataset.cartInfo = "";
  storeRefs.bgContainer.append(storeRefs.modalContainer);

  storeRefs.container.append(storeRefs.bgContainer);

  cartRefs.btn.append(storeRefs.container);
  refs.body.classList.add("no-scroll");

  cartModal();
};

export { headerMarkup, galleryMarkup, bookInfoMarkup, cartMarkup };
