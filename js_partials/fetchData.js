import { galleryMarkup } from "./markup.js";

const fetchingBooks = async () => {
  const response = await fetch("./js_partials/books.json");
  return response;
};

fetchingBooks()
  .then((r) => r.json())
  .then((data) => galleryMarkup(data))
  .catch((error) => console.log(error));

export { fetchingBooks };
