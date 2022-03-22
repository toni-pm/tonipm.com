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
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
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
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `es`, `ca`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `http://localhost:8000/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es']
          },
          {
            matchPath: '/preview',
            languages: ['en']
          }
        ]
      }
    }]
}
