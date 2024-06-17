"use strict";

import fonts from "./fonts_list.js";
import product from "./product.js";
import { keyup_listener, keyup_prevent } from "./listeners/keyup_listener.js";
import change_font from "./utils/change_font.js";
import createOptions from "./utils/create_options.js";

//блок шрифтов
const productFonts = document.querySelector(".productFonts");

//Добавить все доступные шрифты
fonts.forEach(font => {
  const fontItem = document.createElement("li");
  fontItem.classList.add("fontItem");
  // console.log(fontItem);
  fontItem.textContent = font;
  fontItem.style.fontFamily = font;
  if (font == "Comfortaa") {
    fontItem.classList.add("active");
  }
  productFonts.appendChild(fontItem);
  fontItem.addEventListener("click", change_font);
});

import download_svg from "./utils/download_svg.js";
import change_counter from "./utils/change_counter.js";
import change_neon from "./utils/change_neon.js";
import offset_listener from "./listeners/offset_listener.js";
import scale_listener from "./listeners/scale_listener.js";
import margin_listener from "./listeners/margin_listener.js";
import reqToBack from "./listeners/copy_svg.js";
import createLaminatePalette from "./laminate/laminate_pallete.js";
const counters = document.querySelectorAll(".counter__item");
const neons = document.querySelectorAll(".neon__item");

//превью продукта(вывески)
const productText = document.querySelector(".text__content");
const offsetInput = document.querySelector(".offset__number");
const scaleInput = document.querySelector(".scale__number");
const marginInput = document.querySelector(".margin__number");
const productPreview = document.querySelector(".product__preview");

//кнопка копирования SVG
const copyBtn = document.querySelector(".svg-button");

//listeners
productText.addEventListener("keyup", keyup_listener);
productText.addEventListener("keydown", e => {
  // console.log(productText.innerText);
  if (keyup_prevent === false && e.key === "Backspace") {
    return e.preventDefault();
  }
});
offsetInput.addEventListener("keyup", offset_listener);
offsetInput.addEventListener("change", offset_listener);
scaleInput.addEventListener("keyup", scale_listener);
scaleInput.addEventListener("change", scale_listener);
marginInput.addEventListener("keyup", margin_listener);
marginInput.addEventListener("change", margin_listener);

copyBtn.addEventListener("click", () => {
  const name = product.strings[0].text + ".svg";

  download_svg(product.svg.join(), name, "text/plain");
});

counters.forEach(counter => {
  counter.addEventListener("click", change_counter);
});

neons.forEach(neon => {
  neon.addEventListener("click", change_neon);
});

createOptions(productText.children);
reqToBack();

var ce = document.querySelector("[contenteditable]");
ce.addEventListener("paste", function (e) {
  e.preventDefault();
  var text = e.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
});

productPreview.addEventListener("wheel", e => {
  if (e.deltaY > 0.5 && product.zoom < 4) {
    // console.log("up");
    productPreview.style.scale = +productPreview.style.scale + 0.05;
    product.zoom = productPreview.style.scale;
  }
  if (e.deltaY < -0.5 && product.zoom > 0.3) {
    // console.log('down');
    productPreview.style.scale = +productPreview.style.scale - 0.05;
    product.zoom = productPreview.style.scale;
  }
  // console.log(product.zoom);
});

function getPromotionPerion() {
  const promotionPeriod = document.querySelector(".promotionPeriod");
  var now = new Date();
  const threeDaysLater = now.setDate(now.getDate() + 3);
  const day = new Date(threeDaysLater).getDate();
  const month = new Date(threeDaysLater).getMonth() + 1;
  const year = new Date(threeDaysLater).getFullYear();
  promotionPeriod.textContent = [day, month, year].join(".");
}

getPromotionPerion();
