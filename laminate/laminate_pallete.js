import product from "../product.js";
import createElement from "../utils/create_el_class.js";
import laminate_colors from "./laminate_colors.js";
const laminateBlock = document.querySelector(".laminate");
const laminateLabel = document.querySelector(".laminate__label");
const laminateNone = document.querySelector(".laminate__none");

function createLaminatePalette() {
  const palette = createElement("div", "laminate__colors");
  for (let color in laminate_colors) {
    const colorItem = createColorItem(laminate_colors[color], color);
    palette.appendChild(colorItem);
  }
  laminateLabel.textContent = "нет";
  return laminateBlock.appendChild(palette);
}

function createColorItem(color, colorName) {
  // console.log(color);
  const colorItem = createElement("div", "laminate__color");
  colorItem.setAttribute("id", colorName);
  colorItem.style.backgroundColor = color;
  colorItem.addEventListener("click", e => {
    laminateLabel.textContent = "#" + e.target.id;
    product.laminate = color;
    if (product.counter === "square") {
      const rect = document.querySelector("rect");
      rect.style.fill = color;
      rect.style.opacity = 0.9;
      rect.style.stroke = "none";
    }
    if (product.counter === "figure") {
      const offset = document.querySelector("#offset");
      offset.style.stroke = color;
      offset.style.opacity = 0.9;
    }
  });
  return colorItem;
}

laminateNone.addEventListener("click", e => {
  laminateLabel.textContent = "нет";
  product.laminate = false;
  if (product.counter === "square") {
    const rect = document.querySelector("rect");
    rect.removeAttribute("style");
  }
  if (product.counter === "figure") {
    const offset = document.querySelector("#offset");
    offset.style.stroke = "#d3d3d3";
    offset.style.opacity = 0.05;
  }
});

createLaminatePalette();

export default createLaminatePalette;
