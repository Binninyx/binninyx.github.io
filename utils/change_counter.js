import product from "../product.js";
import reqToBack from "../listeners/copy_svg.js";

export default function (font) {
  const counterItems = document.querySelectorAll(".counter__item");
  counterItems.forEach(el => {
    el.classList.remove("active");
  });
  product.counter = font.target.id;
  font.target.classList.add("active");
  reqToBack();
}
