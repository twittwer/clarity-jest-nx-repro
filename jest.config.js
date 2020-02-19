const esModules = ['@clr', 'lit-element', 'lit-html', 'ramda'].join('|');
module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.(ts|html)$': 'ts-jest'
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html']
};
