module.exports = {
  pathPrefix: `/techblog`,
  siteMetadata: {
    title: `techblog`,
    name: `Chris Williams`,
    siteUrl: `https://chrilliams.co.uk`,
    description: `techblog - blog posts of tech for me to remember`,
    hero: {
      heading: `It's still magic even if you know how it's done.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/chrilliams`,
      },
      {
        name: `github`,
        url: `https://github.com/chrilliams`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
