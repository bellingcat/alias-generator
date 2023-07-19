# alias-generator

Node module to generate likely aliases for a given human name.

## Usage

```
import getAliases from '../src/index.js';

let list = getAliases("William Randall Hearst");
console.log(list);
```

Output:

```
[
  'William Hearst',
  'Hearst, William',
  'William Randall Hearst',
  'Hearst, William Randall',
  'William R Hearst',
  'Hearst, William R',
  'W Hearst',
  'W Randall Hearst',
  'W R Hearst',
  'WR Hearst'
]
```
