import katex from "katex";
const { render, renderToString } = katex;

const x = renderToString('x');
console.log(x);

render('y', document.createElement('div'));
