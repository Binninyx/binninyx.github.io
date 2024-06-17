import calc from "../calculations/calc.js";

function product_zoom(e) {
  // console.log(e.target);
  if (e.deltaY > 1) {
    // console.log('up');
    e.target.style.fontSize =
      +e.target.style.fontSize.slice(0, -2) + 0.4 + "px";
  }
  if (e.deltaY < -1) {
    // console.log('down');
    e.target.style.fontSize =
      +e.target.style.fontSize.slice(0, -2) - 0.4 + "px";
  }
}

export default product_zoom;
