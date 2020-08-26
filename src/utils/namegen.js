const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require('unique-names-generator');

module.exports = {
  randomName() {
    return uniqueNamesGenerator({
      style: 'lowerCase',
      dictionaries: [adjectives, animals, colors],
      length: 2,
      separator: '-',
    });
  },
};
