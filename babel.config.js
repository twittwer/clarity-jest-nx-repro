// https://babeljs.io/docs/en/babel-preset-env
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ]
  ]
};
