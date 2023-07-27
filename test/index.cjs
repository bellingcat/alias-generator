const Alias = require( '../dist/main.cjs');

let list = Alias.getAliases("William Randolph Hearst");
console.log(list);

let list1 = Alias.getAliases("Jan Jacob Van den Heiden");
console.log(list1);
