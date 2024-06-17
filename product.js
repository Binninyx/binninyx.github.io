import { fonts, fontsBD } from "./fonts/fontsBD.js";

const counters = ["square", "figure"];
const colors = {
  red: "rgb(255, 0, 0)",
  darkblue: "rgb(45, 88, 255)",
  green: "rgb(4, 255, 0)",
  orange: "rgb(255, 145, 0)",
  yellow: "yellow",
  purple: "rgb(184, 104, 255)",
  blue: "rgb(74, 203, 255)",
  pink: "rgb(255, 82, 232)",
  lightblue: "rgb(0, 255, 185)",
  coldwhite: "white",
  warmwhite: "rgb(252, 246, 186)",
};

const product = {
  strings: [{ text: "EasyNeon", mt: 20, scale: 1, color: "rgb(255, 145, 0)" }],
  currentFont: fonts[0],
  aling: "center",
  counter: "square",
  offset: 50,
  margin: 20,
  round: "20",
  neon: 4.54,
  neonWidth: "6mm",
  laminate: false,
  scale: 1,
  width: 0,
  height: 0,
  viewBoxToHeight: 2, //разница у высоты svgBlock и viewPort в 2 раза
  paths: [],
  svg: [
    `<svg
id="svg"
style="fill: none;
stroke: #000000;
stroke-linecap: round;
stroke-linejoin: round;
stroke-width: `,
    "4.54px",
    `;"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 300 300"
height=" 1500"
width="1500"
overflow="visible">
<style>
rect {
  fill: none;
  stroke: #000000;
  stroke-width:1px;
}
</style>`,
    "gggggg",
    `</svg>`,
  ],
  zoom: 1.5,
};
export default product;
