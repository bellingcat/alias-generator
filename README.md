# alias-generator

Node module to generate likely aliases for a given human name.

## Usage

In node
```
import getAliases from '@bellingcat/alias-generator';

let list = getAliases("William Randolph Hearst");
console.log(list);
```

In the browser
```
<script src="node_modules/@bellingcat/alias-generator/dist/main.js"></script>
<script>

  let list = aliasGenerator.getAliases("William Randolph Hearst");
  console.log(list);

</script>
```

Output:

```
[
  'william hearst',
  'hearst, william',
  'william randolph hearst',
  'hearst, william randolph',
  'william r hearst',
  'hearst, william r',
  'w hearst',
  'w randolph hearst',
  'w r hearst',
  'wr hearst'
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

**Tussenvoegsels** in Dutch names such as "van der Laan" may be abbreviated "v.d. Laan"


## Possibly Helpful Libraries
* https://nameparser.readthedocs.io/en/latest/ (python)
* https://github.com/theiconic/name-parser (php)
* https://github.com/berkmancenter/namae (ruby)
* https://github.com/carltonnorthern/nicknames (python)
* https://www.nameapi.org/en/demos/name-parser/
* https://searchgizmos.com/generate-and-search-for-name-variants-with-carls-name-net/
