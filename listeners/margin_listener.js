import product from "../product.js";
import reqToBack from "./copy_svg.js";

export default function (e) {
  // console.log(e.target.value);
  product.margin = +e.target.value;
  return reqToBack();
}
