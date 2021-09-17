
module.exports = {
  stories: [
    "../src/**/*.stories.js"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [{ loader: 'lit-scss-loader', options: { minify: true } }, 'sass-loader']
    });
    return config;
  },
}
