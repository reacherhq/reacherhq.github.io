module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: '76583d5a-660c-43a9-9fba-8c65c1cf9d49', // This is public anyways
      },
    },
  ],
};
