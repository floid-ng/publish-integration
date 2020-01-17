module.exports = {
  name: 'rhetos',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/rhetos',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
