const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    path.resolve('./.storybook/vanilla-extract.js'),
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  core: {
    "builder": "webpack5"
  }
}