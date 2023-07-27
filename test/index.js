import { getAliases } from '../src/index.js';

let list = getAliases("William Randolph Hearst");
console.log(list);

let list1 = getAliases("Jan Jacob van den Heiden");
console.log(list1);

let list2 = getAliases("Dave");
console.log(list2);
