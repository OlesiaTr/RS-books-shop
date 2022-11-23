import { cartRefs } from "./refs.js";
import { books } from "./books.js";
import { bookInfoMarkup, cartMarkup } from "./markup.js";

const LOCALSTORAGE_KEY = "books-in-cart";
const bookID = [];
const cart = [];
const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
};

function onClick(e) {
  if (
    e.target.classList.contains("add-btn") ||
    e.target.classList.contains("info__btn")
  ) {
    const bookEl = e.target.closest(".gallery__item");
    const bookId = bookEl.id;
    const bookObj = books.find((book) => book.id == bookId);
    onIncrement(bookObj);
    addBookToCart(bookObj, cart);
  }

  if (e.target.classList.contains("show-btn")) {
    const bookEl = e.target.closest(".gallery__item");
    const bookId = bookEl.id;
    const bookObj = books.find((book) => book.id == bookId);
    bookInfoMarkup(bookObj, bookEl);
  }
}

function onIncrement(bookObj) {
  if (bookID.includes(bookObj.id)) return;
  bookID.push(bookObj.id);
  counterValue.increment();
  cartRefs.counter.textContent = counterValue.value;
}

function addBookToCart(book, cart) {
  const itemsInCart = cart.find((item) => item.id === book.id);
  if (!itemsInCart) cart.push(book);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cart));

  // cartMarkup(cart);

  cartRefs.btn.addEventListener("click", (e) => {
    e.preventDefault();
    cartMarkup(cart);
  });
}

export { onClick };
