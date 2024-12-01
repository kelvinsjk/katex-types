import katex = require("katex");

const x = katex.renderToString("x");
console.log(x);
katex.render("y", document.createElement("div"));
