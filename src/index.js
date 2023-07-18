import humanparser from 'humanparser';

const getAliases = (nameStr) => {
  let name = humanparser.parseName(nameStr);
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
  return [
    name.fullName,
    [name.firstName, name.lastName].join(' '),
  ];
}

export default getAliases;
