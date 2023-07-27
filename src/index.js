import humanparser from 'humanparser';

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

export function getAliases(nameStr) {
  let name = humanparser.parseName(nameStr);
  name.middleInitial = getMiddleInitial(name);
  name.firstInitial = getFirstInitial(name);

  let results = [];

  if (name.firstName && name.lastName) {
    results.push(
      // John Doe
      [name.firstName, name.lastName].join(' '),

      // Doe, John
      [name.lastName, name.firstName].join(', '),
    );
  } else if (name.firstName || name.lastName) {
    // Edge case: only one name
    results.push(name.firstName || name.lastName);
  }
  if (name.middleName && name.firstName && name.lastName) {
    results.push(
      // John James Doe
      [name.firstName, name.middleName, name.lastName].join(' '),

      // Doe, John James
      [name.lastName, [name.firstName, name.middleName].join(' ')].join(', ') ,
    );
  }
  if (name.middleInitial) {
    results.push(
      // John J Doe
      [name.firstName, name.middleInitial, name.lastName].join(' '),

      // Doe, John J
      [name.lastName, [name.firstName, name.middleInitial].join(' ')].join(', '),
    );
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
      [name.firstInitial, name.middleName, name.lastName].join(' '),
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
  // TODO: shortening tussenvoegsel in Dutch: van der Laan => vd Laan
  return results;
}

export default getAliases;
