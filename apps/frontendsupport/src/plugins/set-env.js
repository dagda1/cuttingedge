module.exports = {
  set: {
    env({ arc, inventory }) {
      return {
        API_SECRET: process.env.GIT_COMMIT,
      };
    },
  },
};
