import { onClick } from "./itemListener.js";

// galleryRefs.list.addEventListener("click", onClick);

const modalWindow = () => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-info-open]"),
    closeModalBtn: document.querySelector("[data-modal-info-close]"),
    modal: document.querySelector("[data-modal-info]"),
    body: document.querySelector("body"),
    addBtn: document.querySelectorAll(".info__btn"),
  };

  refs.addBtn[0].addEventListener("click", onClick);

  refs.openModalBtn.forEach((item) =>
    item.addEventListener("click", onOpenModal)
  );
  refs.closeModalBtn.addEventListener("click", onCloseModal);

  function onOpenModal(e) {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function onCloseModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.openModalBtn.forEach((item) =>
      item.removeEventListener("click", onOpenModal)
    );
  }
};

export { modalWindow };
