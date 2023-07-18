const getAliases = require('../dist/index.node.js').default

let list = getAliases("William Randall Hearst");
console.log(list);
