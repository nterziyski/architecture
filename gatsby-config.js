require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/architecture"
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Stefana Dilova's Portfolio`,
    // Default title of the page
    siteTitleAlt: `Stefana Dilova's Portfolio`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Stefana Dilova's Portfolio`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://nterziyski.github.io/architecture/`, // TODO: add one after gh pages integration
    // Used for SEO
    siteDescription: `I'm an architect from Berlin and this is my Master Thesis`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`, //TODO: add one
    // Twitter Handle
    author: ``, // TODO: add one
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
