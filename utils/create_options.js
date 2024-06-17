import createElement from "./create_el_class.js";
import createColorPalette from "../neon_colors/color_pallete.js";
import reqToBack from "../listeners/copy_svg.js";
import product from "../product.js";
const textOptions = document.querySelector(".text__options");
const productText = document.querySelector(".text__content");
productText.querySelector("div").style.color = "rgb(255, 145, 0)";

const deleteOldOptions = () => {
  const oldOptions = document.querySelectorAll(".options");
  oldOptions.forEach(el => {
    el.remove();
  });
  return;
};

const createOptions = strings => {
  deleteOldOptions();
  for (let i = 0; i < strings.length; i++) {
    const options = createElement("div", "options"); //высота и цвет строки
    options.setAttribute("id", i);
    options.style.height = strings[i].getBoundingClientRect().height + "px";
    options.addEventListener("click", e => {
      if (e.target.className !== "color") return;
      strings[i].style.color = e.target.style.backgroundColor;

      strings[i].classList.add(e.target.id);
      product.strings[i].color = e.target.style.backgroundColor;
      reqToBack();
    });

    const palette = createColorPalette(); //создание паллитры цветов
    options.appendChild(palette);
    textOptions.appendChild(options);
    options.style.gap = strings[i].getBoundingClientRect().width + 55 + "px";
    textOptions.appendChild(options);
  }
  return;
};

export default createOptions;
