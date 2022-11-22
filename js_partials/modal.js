const modalWindow = () => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-info-open]"),
    closeModalBtn: document.querySelector("[data-modal-info-close]"),
    modal: document.querySelector("[data-modal-info]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.forEach((item) =>
    item.addEventListener("click", toggleModal)
  );
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal(e) {
    // console.log(e);
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
};

export { modalWindow };
