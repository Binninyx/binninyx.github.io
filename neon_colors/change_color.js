import neonColors from "./neon_colors.js";

export default function (text, colorCode) {
  // console.log(colorCode);
  const neonColor = neonColors.find(el => el.color == colorCode);
  const glow = neonColor.glow;
  text.style.color = neonColor.color;
  text.style.textShadow = glow;
}
