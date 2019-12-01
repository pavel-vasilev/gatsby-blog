module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
      plugins: [ `gatsby-remark-images` ],
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Exploring Android`,
    author: `Pavel Vasilev`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/pvasilev96`,
      },
      {
        name: `github`,
        url: `https://github.com/pavel-vasilev`,
      },
    ],
  },
}
