export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  reactOptions: {
    fastRefresh: true,
    strictMode: false
  },
  typescript: {},
  addons: ['@storybook/addon-links'],
  framework: '@storybook/react-vite'
};
