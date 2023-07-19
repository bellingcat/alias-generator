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

## Considerations

When generating name variants, many considerations apply and may be culturally specific. See https://en.wikipedia.org/wiki/Personal_name

**Initials** may be substituted for first or middle names, and middle names may be omitted.
Example: The name "Alfred Jodocus Kwak" may appear online as any of the following equivalents:
 * Alfred Kwak
 * Alfred J. Kwak
 * AJ Kwak
 * A. J. Kwak
 * Kwak, Alfred J
 * Al Kwak

**Name order** is culturally specific: East Asian names are often written surname-givenname instead of the western style of givenname-surname, not to mention in a different character sets:
Example: Hayao Miyazaki
 * Miyazaki Hayao
 * 宮崎 駿

**Patronyms/matronyms** (names derived from the given name of a parent) may appear before, after, or in place of a surname.
Example: Abel Janszoon Tasman ("Abel, son of Jan Tasman")
 * Abel Tasman
 * Abel Janszoon

**Shortened or diminuitive** versions of a name may exist and are culturally specific.
Example: Mike for Michael, Bill for William, Bob for Robert in the West. Katya for Ekaterina in Eastern Europe.

**Marriage** may result in surname changes, hyphenation or combination of one's original name(s).


## Possibly Helpful Libraries
* https://nameparser.readthedocs.io/en/latest/ (python)
* https://github.com/theiconic/name-parser (php)
* https://github.com/berkmancenter/namae (ruby)
* https://github.com/carltonnorthern/nicknames (python)
* https://www.nameapi.org/en/demos/name-parser/
