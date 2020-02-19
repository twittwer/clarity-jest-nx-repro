module.exports = {
  name: 'clr-testing-repro',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/clr-testing-repro',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
