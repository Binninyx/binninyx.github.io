import product from "../product.js";
import reqToBack from "./copy_svg.js";

export default function (e) {
  // console.log(e.target.value);
  product.scale = +e.target.value / 10;
  if (product.neonWidth == "6mm") {
    product.neon = 4.54 / product.scale;
    product.svg[1] = 4.54 / product.scale;
  }
  if (product.neonWidth == "8mm") {
    product.neon = 6.28 / product.scale;
    product.svg[1] = 6.28 / product.scale;
  }
  return reqToBack();
}
