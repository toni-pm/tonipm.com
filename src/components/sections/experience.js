import React from 'react'
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components'
import TabsStyles from 'styles/TabsStyles'
import Gallery from '@browniebroke/gatsby-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const StyledSection = styled.section`
  max-width: 900px;
`

const Experience = () => {
  const { language } = useI18next();
  const data = useStaticQuery(graphql`
      query {
        experience: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/experience/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              html
              frontmatter {
                lang
                title
                company
                range
                url
                gallery {
                  caption
                  img {
                    childImageSharp {
                      thumb: gatsbyImageData(
                        width: 270
                        height: 200
                        placeholder: BLURRED
                      )
                      full: gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
        }
      }
    `);
  const experienceData = data.experience.edges.filter(edge => edge.node.frontmatter.lang === language);

  return (
    <Fade right duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <StyledSection id='experience'>
        <h2><Trans>Experience</Trans></h2>

        <div className='inner'>
          <TabsStyles>
            <Tabs>
              <TabList>
                {experienceData &&
                  experienceData.map(({ node }, i) => {
                    const { company } = node.frontmatter;
                    return (
                      <Tab key={i}>{company}</Tab>
                    );
                  })}
              </TabList>

              {experienceData &&
                experienceData.map(({ node }, i) => {
                  const { frontmatter, html } = node;
                  const { company, title, range, url, gallery } = frontmatter;
                  let images = []
                  if (gallery) {
                    images = gallery.map((node) => {
                      const image = node.img.childImageSharp
                      image.caption = node.caption
                      return image
                    })
                  }

                  return (
                    <TabPanel key={i}>
                      <h3>{title}</h3>
                      <div>{company}</div>
                      <p>{range}</p>
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                      <Gallery images={images} />
                    </TabPanel>
                  );
                })}
            </Tabs>
          </TabsStyles>
        </div>
      </StyledSection>
    </Fade>
  )
}

export default Experience
