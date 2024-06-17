function createElement(tag, elClass) {
  const el = document.createElement(tag);
  el.classList.add(elClass);
  return el;
}

export default createElement;
