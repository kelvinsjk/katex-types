import katex from "katex";
import { type KatexOptions } from "katex";
const { render, renderToString } = katex;

// working examples
const macros = {
  "\\RR": "\\mathbb{R}",
};
const options: KatexOptions = {
  displayMode: true,
  macros,
};
const x = renderToString("x", options);
console.log(x);
render("y", document.createElement("div"));

// these should give warnings
const texNotString = renderToString(1);
const invalidElement = render("y", x);
const invalidOption1: KatexOptions = { align: true };
const invalidOption2 = renderToString("x", { displayMod: true });
