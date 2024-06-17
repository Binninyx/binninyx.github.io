import product from "../product.js";
import createOptions from "../utils/create_options.js";
import reqToBack from "./copy_svg.js";
const productText = document.querySelector(".text__content");


let keyup_prevent = true;

function keyup_listener(e) {
  
  const spans = productText.querySelectorAll("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].removeAttribute("style");
  }

  if (e.target.innerText.replace(/\s/g, "") === "") {
    keyup_prevent = false;
  } else {
    keyup_prevent = true;
  }

  const strings = e.target.children;

  createOptions(strings);
  product.strings = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].innerText !== "") {
      product.strings.push({
        text: strings[i].innerText,
        mt: 20,
        scale: 1,
        color: strings[i].style.color,
      });
    }
  }

  reqToBack();
  return;
}

export { keyup_listener, keyup_prevent };
