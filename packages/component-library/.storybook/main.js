import path from 'path';

export default {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  reactOptions: {
    fastRefresh: true,
    strictMode: false,
  },
  typescript: {
    // check: true,
    // checkOptions: {},
    // reactDocgen: false 
  },
  addons: [
    path.resolve('./.storybook/vanilla-extract.js'),
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  core: {
    "builder": "webpack5"
  },
  framework: '@storybook/react',
}