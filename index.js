import { galleryRefs } from "./js_partials/refs.js";
import headerMarkup from "./js_partials/header.js";
import { onClick } from "./js_partials/clickToCart.js";
import { fetchingBooks } from "./js_partials/fetchData.js";

headerMarkup();
fetchingBooks();

galleryRefs.list.addEventListener("click", onClick);

// function findBookById(id) {
//   return books.find((book) => book.id === id);
// }
