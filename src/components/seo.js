import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

const Seo = ({ description, title, image, meta }) => {
    const { language } = useI18next()
    const { site } = useStaticQuery(graphql`
       query {
         site {
           siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
           }
         }
       }
     `
    )

    const {
        defaultTitle,
        defaultDescription,
        siteUrl
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image ? `${siteUrl}${image}` : null,
        url: `${siteUrl}`
    }

    return (
        <Helmet
            htmlAttributes={{
                lang: language
            }}
            title={title}
            defaultTitle={seo.title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: 'description',
                    content: seo.description
                },
                {
                    property: 'og:title',
                    content: seo.title
                },
                {
                    property: 'og:description',
                    content: seo.description
                },
                {
                    property: 'og:image',
                    content: seo.image
                },
                {
                    property: 'og:url',
                    content: seo.url
                },
                {
                    property: 'og:type',
                    content: 'website'
                }
            ].concat(meta)}
        />
    )
}

Seo.defaultProps = {
    lang: 'en',
    meta: [],
    description: ''
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
}

export default Seo
