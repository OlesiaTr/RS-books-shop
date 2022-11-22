import { galleryRefs, modalRefs } from "./refs.js";
import { modalWindow } from "./modal.js";
import { galleryMarkup } from "./galleryMarkup.js";

// function showBtnListener(markupRefs) {
//   markupRefs.showBtns.forEach((btn) => {
//     btn.addEventListener("click", showInfo);
//   });
// }

// function showInfo(e) {
//   modalWindow();
//   //   console.log(e.currentTarget.id);
// }

// function infoMarkup(data, markupRefs) {
//   const svgBtn = `<button class="modal__close" data-modal-info-close>
//                 <svg class="modal-icon__close" width="40px" height="40px">
//                     <use href="./imgs/symbol-defs.svg#icon-close"></use>
//                 </svg>
//             </button>`;

//   const arr = [...markupRefs.showBtns];

//   const numbers = [];

//   arr.forEach(({ id }) => {
//     numbers.push(Number(id));
//   });

//   data.forEach((book) => {
//     let i = book.id;

//     console.log(arr);

//     modalRefs.btn.classList.add("gallery__btn");
//     modalRefs.btn.type = "button";
//     modalRefs.btn.innerText = "+ Add to cart";

//     modalRefs.desc.classList.add("info__desc");
//     modalRefs.desc.innerHTML = book.description;

//     modalRefs.img.classList.add("info__img");
//     modalRefs.img.src = book.imageLink;
//     modalRefs.img.alt = book.title;

//     modalRefs.modalContainer.classList.add("modal");
//     modalRefs.modalContainer.innerHTML = svgBtn;
//     modalRefs.modalContainer.appendChild(modalRefs.img);
//     modalRefs.modalContainer.appendChild(modalRefs.desc);
//     modalRefs.modalContainer.appendChild(modalRefs.btn);

//     modalRefs.bgContainer.classList.add("modal__bg");
//     modalRefs.bgContainer.classList.add("is-hidden");
//     modalRefs.bgContainer.dataset.modalInfo = "";
//     modalRefs.bgContainer.id = book.id;
//     modalRefs.bgContainer.appendChild(modalRefs.modalContainer);

//     // let container = new DocumentFragment();

//     // container.appendChild(modalRefs.bgContainer);
//     // el.append(modalRefs.container);
//     arr[i].after(modalRefs.bgContainer);
//   });
// }

// export { showBtnListener, infoMarkup };

console.log(galleryRefs.list);
