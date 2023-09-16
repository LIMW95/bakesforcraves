// next.config.js
module.exports = {
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
        // Add other routes as needed
      };
    },
    // Other Next.js configuration options
  };
  