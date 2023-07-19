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

const getAliases = (nameStr) => {
  let name = humanparser.parseName(nameStr);
  name.middleInitial = getMiddleInitial(name);
  name.firstInitial = getFirstInitial(name);

  /*
    {
        salutation: 'Mr.',
        firstName: 'William',
        suffix: 'III',
        lastName: 'Hearst',
        middleName: 'R.',
        fullName: 'Mr. William R. Hearst, III'
    }
  */
  let results = [
    [name.firstName, name.lastName].join(' '),
    [name.lastName, name.firstName].join(', '),
  ];
  if (name.middleName) {
    results.push(
      [name.firstName, name.middleName, name.lastName].join(' '),
      [name.lastName, [name.firstName, name.middleName].join(' ')].join(', ') ,
    );
  }
  if (name.middleInitial) {
    results.push(
      [name.firstName, name.middleInitial, name.lastName].join(' '),
      [name.lastName, [name.firstName, name.middleInitial].join(' ')].join(', ') ,
    );
  }

  if (name.middleInitial && name.middleInitial) {
    results.push(
      [name.firstInitial, name.middleInitial, name.lastName].join(' '),  // J P Heije
      [(name.firstInitial+name.middleInitial), name.lastName].join(' '), // JP Heije
    );
  }
  return results;
}

export default getAliases;
