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
  plugins: [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: false } ],
    ['@babel/plugin-proposal-class-properties', { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    ["@babel/plugin-transform-runtime", { regenerator: true }],
  ],
});