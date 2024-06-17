import product from "../product.js";
import reqToBack from "../listeners/copy_svg.js";

export default function (font) {
  product.margin = 20;
  const marginInput = document.querySelector(".margin__number");
  marginInput.value = product.margin;

  const fontItems = document.querySelectorAll(".fontItem");
  fontItems.forEach(el => {
    el.classList.remove("active");
  });
  font.target.classList.add("active");
  product.currentFont = font.target.textContent;
  reqToBack();
}
