module.exports = (api) => ({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: api.caller((caller) => caller && caller.name === 'babel-jest')
          ? { node: 'current' }
          : { },
      },
    ],
  ],
  plugins: [],
});
