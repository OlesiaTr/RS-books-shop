import { refs, headerRefs, cartRefs } from "./refs.js";

export default function headerMarkup() {
  cartRefs.counter.classList.add("cart__item-counter");

  const svg = `<svg width="40" height="40" aria-label="Toggles cart">
                        <use class="cart__icon" href="./imgs/symbol-defs.svg#icon-cart"></use>
                    </svg>`;

  cartRefs.btn.classList.add("cart__btn");
  cartRefs.btn.type = "button";
  cartRefs.btn.dataset.menuButton = "";
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
}
