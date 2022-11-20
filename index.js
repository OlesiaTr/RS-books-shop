// import { refs, galleryContainer, galleryList } from "./js_partials/refs.js";
import { galleryMarkup } from "./js_partials/galleryMarkup.js";

fetchingBooks();

function fetchingBooks() {
  fetch("./js_partials/books.json") //path to the file with json data
    .then((response) => response.json())
    .then((data) => galleryMarkup(data))
    .catch((error) => console.log(error));
}
