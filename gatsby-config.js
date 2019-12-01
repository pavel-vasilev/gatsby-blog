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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.TRACKING_ID,
      },
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
