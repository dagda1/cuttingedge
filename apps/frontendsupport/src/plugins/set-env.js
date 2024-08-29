export default {
  set: {
    env({ arc, inventory }) {
      return {
        GIT_COMMIT: process.env.GIT_COMMIT
      };
    }
  }
};
