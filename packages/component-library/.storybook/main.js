export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  reactOptions: {
    fastRefresh: true,
    strictMode: false
  },
  typescript: {},
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react-vite'
};
