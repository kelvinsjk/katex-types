const katex = require('katex');

const x = katex.renderToString('x');
console.log(x);
console.log(katex.version);

katex.render('y', document.createElement('div'));
