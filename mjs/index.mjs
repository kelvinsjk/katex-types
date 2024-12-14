import katex from "katex";
const { render: renderFn, renderToString, version } = katex;

const x = renderToString('x');
console.log(x);
console.log(version)

renderFn('y', document.createElement('div'));

import { render } from "katex";