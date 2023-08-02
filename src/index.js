import nickToName from './nickToName.json';
import nameToNick from './nameToNick.json';
import humanparser from 'humanparser';
import {findPreposition} from 'tussenvoegsels';

const getMiddleInitial = (nameObj) => {
  if (!nameObj.middleName || typeof nameObj.middleName !== 'string') {
    return null;
  }

  return nameObj.middleName[0].toLowerCase();
}
const getFirstInitial = (nameObj) => {
  if (!nameObj.firstName || typeof nameObj.firstName !== 'string') {
    return null;
  }

  return nameObj.firstName[0].toLowerCase();
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
      const tussenvoegsel = dutch.preposition.trim().toLowerCase();
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

function getNamesfromNickname(name) {
  return getAlternateNames(name, nickToName);
}
function getNicknamesFromName(name) {
  return getAlternateNames(name, nameToNick);
}
function getAlternateNames(name, nameMap) {
  // Assume the firstName is a nickname and suggest full names
  let results = [];
  const firstName = name.firstName.toLowerCase();
  if (nameMap[firstName]) {
    nameMap[firstName].forEach(function(altFirstName) {
      let copy = { ...name, firstName: altFirstName };
      let moreNames = commonVariations(copy);
      Array.prototype.push.apply(results, moreNames);
    });
  }

  return results;
}

export function getAliases(nameStr) {
  let name = humanparser.parseName(nameStr);
  name.middleInitial = getMiddleInitial(name);
  name.firstInitial = getFirstInitial(name);

  for (const namePart in name) {
    if (name[namePart]) {
      name[namePart] = name[namePart].toLowerCase();
    }
  }

  let results = commonVariations(name);

  let dutchResults = dutchVariations(name);
  Array.prototype.push.apply(results, dutchResults);

  let nicknames = getNamesfromNickname(name);
  Array.prototype.push.apply(results, nicknames);

  let fullnames = getNicknamesFromName(name);
  Array.prototype.push.apply(results, fullnames);

  return [...new Set(results)]; // use Set to remove duplicates
}

export default getAliases;
