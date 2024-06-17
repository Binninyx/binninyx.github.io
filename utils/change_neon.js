import product from "../product.js";
import reqToBack from "../listeners/copy_svg.js";

export default function (neon) {
  // console.log(neon.target);
  const neonItems = document.querySelectorAll(".neon__item");
  neonItems.forEach(el => {
    el.classList.remove("active");
  });
  if (neon.target.id == "6mm") {
    product.neon = 4.54 / product.scale;
    product.neonWidth = "6mm";
    product.svg[1] = 4.54 / product.scale;
  }
  if (neon.target.id == "8mm") {
    product.neon = 6.28 / product.scale;
    product.neonWidth = "8mm";
    product.svg[1] = 6.28 / product.scale;
  }
  neon.target.classList.add("active");
  reqToBack();
}
