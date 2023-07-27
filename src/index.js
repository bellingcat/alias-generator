import humanparser from 'humanparser';
import {findPreposition} from 'tussenvoegsels';

const getMiddleInitial = (nameObj) => {
  if (!nameObj.middleName || typeof nameObj.middleName !== 'string') {
    return null;
  }

  return nameObj.middleName[0].toUpperCase();
}
const getFirstInitial = (nameObj) => {
  if (!nameObj.firstName || typeof nameObj.firstName !== 'string') {
    return null;
  }

  return nameObj.firstName[0].toUpperCase();
}

function transpose(name) {
  // Last names to the front!

  let results = [];
  if (name.middleName && name.firstName && name.lastName) {
    results.push(
      // Doe, John James
      [name.lastName, [name.firstName, name.middleName].join(' ')].join(', ') ,
    );
  }
  if (name.firstName && name.middleInitial && name.lastName) {
    results.push(

      // Doe, John J
      [name.lastName, [name.firstName, name.middleInitial].join(' ')].join(', '),
    );
  }
  if (name.firstName && name.lastName) {
    results.push(
      // Doe, John
      [name.lastName, name.firstName].join(', '),
    );
  }
  return results;
}

function commonVariations(name) {
  let results = [];

  if (name.middleName && name.firstName && name.lastName) {
    results.push(
      // John James Doe
      [name.firstName, name.middleName, name.lastName].join(' '),
    );
  }
  if (name.middleInitial) {
    results.push(
      // John J Doe
      [name.firstName, name.middleInitial, name.lastName].join(' '),
    );
  }
  if (name.firstName && name.lastName) {
    results.push(
      // John Doe
      [name.firstName, name.lastName].join(' ')
    );
  } else if (name.firstName || name.lastName) {
    // Edge case: only one name so return it
    results.push(name.firstName || name.lastName);
  }

  if (name.firstInitial && name.lastName) {
    results.push(
      // J Doe
      [name.firstInitial, name.lastName].join(' '),
    );
  }
  if (name.firstInitial && name.middleName) {
    results.push(

      // J James Doe
      [name.firstInitial, name.middleName, name.lastName].join(' ')
    );
  }
  if (name.firstInitial && name.middleInitial) {
    results.push(

      // J J Doe
      [name.firstInitial, name.middleInitial, name.lastName].join(' '),

      // JJ Doe
      [(name.firstInitial+name.middleInitial), name.lastName].join(' '),
    );
  }

  Array.prototype.push.apply(results, transpose(name));

  return results;
}

function dutchVariations(name) {
  let results = [];
  if (name.lastName) {
    let dutch = findPreposition(name.lastName);

    if (dutch.preposition) {
      const tussenvoegsel = dutch.preposition.trim();
      switch (tussenvoegsel) {
        case 'van der':
        case 'van den':
        case 'van dem':
        case 'van de':
          let abbrev = "vd " + dutch.lastName;
          let copy = { ...name, lastName: abbrev };

          let moreNames = commonVariations(copy);

          Array.prototype.push.apply(results, moreNames);
      }
    }
  }
  return results;
}

export function getAliases(nameStr) {
  let name = humanparser.parseName(nameStr);
  name.middleInitial = getMiddleInitial(name);
  name.firstInitial = getFirstInitial(name);

  let results = commonVariations(name);

  let dutchResults = dutchVariations(name);
  Array.prototype.push.apply(results, dutchResults);

  return results;
}

export default getAliases;
