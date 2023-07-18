const humanparser = require('humanparser');

const getAliases = (nameStr) => {
  let name = humanparser(nameStr);
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
  [
    name.fullName,
    [name.firstName, name.lastName].join(' '),
  ]
}

export default getAliases;
