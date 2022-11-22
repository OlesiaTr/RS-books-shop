const refs = {
  body: document.querySelector("body"),
  header: document.querySelector("header"),
  main: document.querySelector("main"),
  draggables: document.querySelectorAll(".draggable"),
};

const headerRefs = {
  container: new DocumentFragment(),
  header: document.createElement("header"),
  section: document.createElement("div"),
  logo: document.createElement("a"),
};

const cartRefs = {
  container: document.createElement("div"),
  title: document.createElement("p"),
  btn: document.createElement("button"),
  svg: document.createElement("svg"),
  counter: document.createElement("span"),
};

const galleryRefs = {
  container: new DocumentFragment(),
  list: document.createElement("ul"),
};

const modalRefs = {
  container: new DocumentFragment(),
  bgContainer: document.createElement("div"),
  modalContainer: document.createElement("div"),
  img: document.createElement("img"),
  desc: document.createElement("p"),
  btn: document.createElement("button"),
  wrap: document.createElement("div"),
};

export { refs, galleryRefs, headerRefs, cartRefs, modalRefs };
