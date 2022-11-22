import { galleryRefs } from "./js_partials/refs.js";
import { headerMarkup } from "./js_partials/markup.js";
import { onClick } from "./js_partials/itemListener.js";
import { fetchingBooks } from "./js_partials/fetchData.js";

headerMarkup();
fetchingBooks();

galleryRefs.list.addEventListener("click", onClick);
