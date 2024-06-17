import product from "../product.js";
import { fontsBD } from "../fonts/fontsBD.js";
const svg = document.querySelector("svg");
const svgWrapper = document.querySelector("#svg-wrapper");
const svgBlock = document.querySelector(".product__preview");
const productWidthText = document.querySelector(".product__width");
const productHeightText = document.querySelector(".product__height");
const outputMetrs = document.querySelector(".metrs");
const outputElements = document.querySelector(".elements");
const outputSquare = document.querySelector(".square");
const outputAdapter = document.querySelector(".adapter");
const outputPower = document.querySelector(".power");

const adapters = [12, 24, 36, 60, 100, 150, 200, 250, 300, 350, 400];

const coef = 2;

function reqToBack() {
  if (product.strings.length === 0) {
    return;
  }
  svgBlock.style.scale = 1;

  svgWrapper.innerHTML = "";
  svgWrapper.removeAttribute("transform");

  product.paths = [];
  product.elements = 0;

  const strings = product.strings.map(str => makeString(str));

  product.width = svgWrapper.getBoundingClientRect().width.toFixed() * coef;

  let move_X = 0;
  if (product.aling == "center") {
    move_X = (product.width - strings[0].width) / 2;
  }
  strings[0].group.setAttribute(
    "transform",
    `translate(${move_X}, ${strings[0].mt})`
  );
  product.height = svgWrapper.getBoundingClientRect().height.toFixed() * coef;
  product.width = svgWrapper.getBoundingClientRect().width.toFixed() * coef;

  strings.reduce(makeRows);

  product.height = svgWrapper.getBoundingClientRect().height.toFixed() * coef;
  product.width = svgWrapper.getBoundingClientRect().width.toFixed() * coef;

  makeСontour(svgWrapper);

  svgWrapper.setAttribute("transform", `scale(${product.scale})`);

  product.height = svgWrapper.getBoundingClientRect().height.toFixed() * coef;
  product.width = svgWrapper.getBoundingClientRect().width.toFixed() * coef;

  setSizes();
  calc();

  if (product.counter == "figure") {
    const rect = document.querySelectorAll("rect");
    for (let i = 0; i < rect.length; i++) {
      rect[i].remove();
    }
  }
  product.svg[3] = svgWrapper.outerHTML;
  makeBeauty();
  svgBlock.style.scale = product.zoom;
  return;
}

const makeString = string => {
  const font = product.currentFont;
  const { fontStep, space } = fontsBD[font];

  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("class", "line");
  group.style.stroke = string.color;
  svgWrapper.appendChild(group);
  // console.log(string.color == "yellow");
  if (
    ["rgb(255, 0, 0)", "rgb(255, 145, 0)", "rgb(255, 145, 0)"].includes(
      string.color
    )
  ) {
    group.classList.add("red-glow");
  } else if (string.color == "rgb(252, 246, 186)") {
    group.classList.add("warm-glow");
  } else if (string.color == "rgb(184, 104, 255)") {
    group.classList.add("darkblue-glow");
  } else if (string.color == "rgb(45, 88, 255)") {
    group.classList.add("darkblue-glow");
  } else if (string.color == "rgb(255, 0, 0)") {
    group.classList.add("red-glow");
  } else if (string.color == "yellow") {
    group.classList.add("yellow-glow");
  } else if (string.color == "rgb(4, 255, 0)") {
    group.classList.add("green-glow");
  } else if (string.color == "rgb(255, 82, 232)") {
    group.classList.add("pink-glow");
  } else if (string.color == "white") {
    group.classList.add("white-glow");
  } else {
    group.classList.add("cold-glow");
  }

  //разбивка слова в строке на буквы
  const word = string.text.trimStart().split("");

  //начало строки
  let x_pos = 0;

  for (let j = 0; j < word.length; j++) {
    //если в базе есть шрифт с буквой
    // console.log(word[j]);
    if (word[j] == " ") {
      x_pos += space;
    }
    if (fontsBD[font].letters[word[j]]) {
      product.elements += fontsBD[font].letters[word[j]].el;
      const pathElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      let stepBack = 0;
      if (j > 0) {
        stepBack = fontsBD[font].letters[word[j]].stepBack || 0;
      }
      group.appendChild(pathElement);
      pathElement.setAttribute("transform", `translate(${x_pos - stepBack},0)`);
      let path = fontsBD[font].letters[word[j]].path;
      product.paths.push(pathElement);
      let letterStep = fontsBD[font].letters[word[j]].step || fontStep;
      pathElement.setAttribute("d", path);
      x_pos =
        +group.getBoundingClientRect().width.toFixed() * coef + letterStep;
      // console.log(x_pos, letterStep);
    }
  }
  const height = +group.getBoundingClientRect().height.toFixed() * coef;
  const width = +group.getBoundingClientRect().width.toFixed() * coef;
  return { height, width, group, mt: string.mt };
};

const makeRows = (prev, string, i) => {
  // console.log(prev);
  const prevHeight = prev.group.getBoundingClientRect().height.toFixed() * 2;
  const prevTop = prev.group.getBoundingClientRect().top.toFixed() * 2;
  const stringTop = string.group.getBoundingClientRect().top.toFixed() * 2;
  // console.log(product.currentFont);
  // const marginBottom = fontsBD[product.currentFont].marginBottom || 10
  const marginBottom = product.margin;
  const move_Y = prevHeight + prevTop - stringTop + marginBottom; //20 - отступ строки
  let move_X = 0;
  if (product.aling == "center") {
    move_X = (product.width - string.width) / 2;
  }
  // console.log(prevHeight, stringTop);
  string.group.setAttribute("transform", `translate(${move_X},${move_Y})`);
  return string;
};

const makeСontour = strings => {
  // if (product.counter === "square") {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const stringsTop = strings.getBoundingClientRect().top.toFixed();
  const svgTop = svg.getBoundingClientRect().top.toFixed();
  const stringsLeft = strings.getBoundingClientRect().left.toFixed();
  const svgLeft = svg.getBoundingClientRect().left.toFixed();
  // console.log("tops", stringsTop, svgTop);
  // console.log(product.height, product.width);
  rect.setAttribute(
    "x",
    `${(stringsLeft - svgLeft) * coef - product.offset / 2}`
  );
  rect.setAttribute(
    "y",
    `${(stringsTop - svgTop) * coef - product.offset / 2}`
  );
  rect.setAttribute("rx", product.round);
  rect.setAttribute("height", `${product.height + product.offset}`);
  rect.setAttribute("width", `${product.width + product.offset}`);
  rect.setAttribute("style", "stroke:white");

  const groups = svg.querySelectorAll(".line");

  if (product.counter === "figure") {
    // rect.style.opacity = "0";
    // window.style.display = "none";
    const offsetGroup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    offsetGroup.setAttribute("id", "offset");
    svgWrapper.prepend(offsetGroup);
    offsetGroup.style.stroke = "#d3d3d3";
    offsetGroup.style.strokeWidth = product.offset + "px";
    for (let i = 0; i < groups.length; i++) {
      const offsetClone = groups[i].cloneNode(true);
      offsetClone.removeAttribute("class");
      offsetClone.removeAttribute("style");
      offsetGroup.appendChild(offsetClone);
    }
  }
  svgWrapper.prepend(rect);

  return;
};

const makeBeauty = strings => {
  const groups = svg.querySelectorAll(".line");

  const shadowGroup = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  const shadow2Group = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );

  const whiteGroup = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  const lightGroup = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  lightGroup.setAttribute("id", "light");
  svgWrapper.prepend(lightGroup);
  lightGroup.style.stroke = "black";
  lightGroup.style.opacity = ".6";
  lightGroup.setAttribute("transform", "translate(.3,.3)");
  lightGroup.style.strokeWidth = 5 + "px";

  for (let i = 0; i < groups.length; i++) {
    const lightClone = groups[i].cloneNode(true);
    lightClone.removeAttribute("class");
    lightClone.removeAttribute("style");
    lightGroup.appendChild(lightClone);
  }
  whiteGroup.setAttribute("id", "white");
  svgWrapper.prepend(whiteGroup);
  whiteGroup.style.stroke = "white";
  whiteGroup.style.opacity = ".6";
  whiteGroup.setAttribute("transform", "translate(.3,.3)");
  whiteGroup.style.strokeWidth = 5 + "px";

  for (let i = 0; i < groups.length; i++) {
    const whiteClone = groups[i].cloneNode(true);
    whiteClone.removeAttribute("class");
    whiteClone.removeAttribute("style");
    whiteGroup.appendChild(whiteClone);
  }

  shadow2Group.setAttribute("id", "shadow2");
  svgWrapper.prepend(shadow2Group);
  shadow2Group.style.stroke = "black";
  shadow2Group.style.opacity = ".5";
  shadow2Group.setAttribute("transform", "translate(5,5)");
  shadow2Group.style.strokeWidth = 5 + "px";

  for (let i = 0; i < groups.length; i++) {
    const shadow2Clone = groups[i].cloneNode(true);
    shadow2Clone.removeAttribute("class");
    shadow2Clone.removeAttribute("style");
    shadow2Group.appendChild(shadow2Clone);
  }
  shadowGroup.setAttribute("id", "shadow");
  svgWrapper.prepend(shadowGroup);
  shadowGroup.style.stroke = "black";
  shadowGroup.style.opacity = "1";
  shadowGroup.setAttribute("transform", "translate(2,2)");
  shadowGroup.style.strokeWidth = 5 + "px";

  for (let i = 0; i < groups.length; i++) {
    const shadowClone = groups[i].cloneNode(true);
    shadowClone.removeAttribute("class");
    shadowClone.removeAttribute("style");
    shadowGroup.appendChild(shadowClone);
  }
  if (product.counter === "square") {
    const rect = document.querySelector("rect");
    svgWrapper.prepend(rect);
    const window = rect.cloneNode(true);
    svgWrapper.appendChild(window);
    window.style.stroke = "white";
    window.style.fill = "none";
    window.style.opacity = ".07";
    window.setAttribute("transform", "translate(-1,-1)");
    if (product.laminate !== false) {
      rect.style.fill = product.laminate;
      rect.style.opacity = 0.9;
      rect.style.stroke = "none";
    }
  }
  if (product.counter === "figure") {
    const offset = document.querySelector("#offset");
    svgWrapper.prepend(offset);
    if (product.laminate !== false) {
      offset.style.stroke = product.laminate;
      offset.style.opacity = 0.9;
    }
  }

  return;
};

const setSizes = () => {
  svgBlock.style.width = product.width / 2 + "px";
  svgBlock.style.height = product.height / 2 + "px";
  const svgBlockRect = svgBlock.getBoundingClientRect();
  const svgWrapperRect = svgWrapper.getBoundingClientRect();
  svgWrapper.setAttribute(
    "transform",
    `translate(${
      (svgBlockRect.left.toFixed() - svgWrapperRect.left.toFixed()) * coef
    },${(svgBlockRect.top - svgWrapperRect.top) * coef}), scale(${
      product.scale
    })`
  );
  const rect = document.querySelector("rect");
  const rectWidth = rect.getBBox().width;
  const rectHeight = rect.getBBox().height;
  // rect.setAttribute("transform", `translate(100,1)`);
  // console.log(rect.getBBox());
  const productWidth = (rectWidth * 0.132 * product.scale).toFixed();
  const productHeight = (rectHeight * 0.132 * product.scale).toFixed();

  productWidthText.textContent = productWidth + "см";
  productHeightText.textContent = productHeight + "см";
  outputSquare.textContent =
    "Площадь: " + (productHeight * productWidth * 0.0001).toFixed(2) + "м2";
};

const calc = () => {
  const { paths, scale } = product;
  let res = 0;
  for (let i = 0; i < paths.length; i++) {
    res += paths[i].getTotalLength();
  }
  res = ((res * 15.626 * scale * 0.000265) / 3.13).toFixed(2);
  outputMetrs.textContent = res;
  outputElements.textContent = product.elements;
  const power = (res * 14).toFixed();
  outputPower.textContent = power + " W";
  let adapter = 0;
  for (let i = 0; i < adapters.length; i++) {
    if (adapters[i] > power) {
      adapter = adapters[i];
      break;
    }
  }
  outputAdapter.textContent = adapter + " W";
  return;
};

export default reqToBack;
