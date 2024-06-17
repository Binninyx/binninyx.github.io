import createElement from "../utils/create_el_class.js";

const neonColors = {
  red: "rgb(255, 0, 0)",
  darkblue: "rgb(45, 88, 255)",
  green: "rgb(4, 255, 0)",
  orange: "rgb(255, 145, 0)",
  // orangeу: "rgb(255, 182, 49)",
  yellow: "yellow",
  purple: "rgb(184, 104, 255)",
  blue: "rgb(74, 203, 255)",
  pink: "rgb(255, 82, 232)",
  lightblue: "rgb(0, 255, 185)",
  coldwhite: "white",
  warmwhite: "rgb(252, 246, 186)",
};

function createColorPalette() {
  const palette = createElement("div", "colors");
  for (let color in neonColors) {
    const colorItem = createColorItem(neonColors[color], color);
    palette.appendChild(colorItem);
  }
  return palette;
}

function createColorItem(color, colorName) {
  // console.log(color);
  const colorItem = createElement("div", "color");
  colorItem.setAttribute("id", colorName);
  colorItem.style.backgroundColor = color;
  return colorItem;
}

export default createColorPalette;
