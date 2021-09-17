
module.exports = {
  stories: [
    "../src/**/*.stories.js"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  webpackFinal: (config) => {
    config.resolve.alias['../src/TestComponent.js'] = './TestComponent';
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true,
            },
          },
          'sass-loader'
        ],
      },
    );
    return config;
  },
}
