const path = require('path')
const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'new',
    siteUrl: 'https://www.yourdomain.tld'
  },
  plugins: ['gatsby-plugin-image', 'gatsby-plugin-styled-components', 'gatsby-plugin-mdx', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        resolveModules: [path.join(__dirname, 'libs')],
        utils: path.join(__dirname, 'src')
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    }]
}
