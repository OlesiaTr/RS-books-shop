const refs = {
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

export { refs, galleryRefs, headerRefs, cartRefs };
