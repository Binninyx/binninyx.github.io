import product from "../product.js";
import reqToBack from "./copy_svg.js";

export default function (e) {
  // console.log(e.target.value);
  product.offset = +e.target.value * 10;
  return reqToBack();
}
