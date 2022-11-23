import { onClick } from "./itemListener.js";

const infoModal = () => {
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
    console.log(e.target);

    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function onCloseModal(e) {
    console.log(e.target);

    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.openModalBtn.forEach((item) =>
      item.removeEventListener("click", onOpenModal)
    );
  }
};

const cartModal = () => {
  const refs = {
    openModalBtn: document.querySelector("[data-cart-open]"),
    closeModalBtn: document.querySelector("[data-cart-close]"),
    modal: document.querySelector("[data-cart-info]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  // refs.openModalBtn.removeEventListener("click", onOpenModal);
  // console.log(refs.openModalBtn);
  // console.dir(window);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal(e) {
    // e.preventDefault();
    console.log(e.currentTarget);
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.openModalBtn.removeEventListener("click", toggleModal);
  }

  // function onOpenModal(e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   refs.modal.classList.toggle("is-hidden");
  //   // refs.body.classList.toggle("no-scroll");
  //   refs.openModalBtn.removeEventListener("click", onOpenModal);
  // }

  // function onCloseModal(e) {
  //   console.log(e.target);
  //   refs.modal.classList.toggle("is-hidden");
  //   refs.body.classList.toggle("no-scroll");
  //   refs.openModalBtn.removeEventListener("click", onOpenModal);
  // }
};

export { infoModal, cartModal };
