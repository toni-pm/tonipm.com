import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';
import { education } from 'config'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabsStyles from 'styles/TabsStyles'
import Gallery from '@browniebroke/gatsby-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const StyledSection = styled.section`
  max-width: 900px;
`

const Education = () => {
  const { language } = useI18next();
  const data = useStaticQuery(graphql`
      query {
        education: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/education/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              html
              frontmatter {
                lang
                name
                location
                range
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
  const educationData = data.education.edges.filter(edge => edge.node.frontmatter.lang === language);

  return (
    <Fade left duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <StyledSection id='education'>
        <h2><Trans>Education</Trans></h2>
        <div className='inner'>
          <TabsStyles>
            <Tabs>
              <TabList>
                {educationData &&
                  educationData.map(({ node }, i) => {
                    const { name } = node.frontmatter;
                    return (
                      <Tab key={i}>{name}</Tab>
                    );
                  })}
              </TabList>

              {educationData &&
                educationData.map(({ node }, i) => {
                  const { frontmatter, html } = node;
                  const { name, location, range, gallery } = frontmatter;
                  let images = []
                  if (gallery) {
                    images = gallery.map((node) => {
                      const image = node.img.childImageSharp
                      image.caption = node.caption
                      return image
                    })
                  }
                  console.log('+++++++++++gallery', gallery)
                  console.log('+++++++++++images', images)

                  return (
                    <TabPanel key={i}>
                      <h3>{name}</h3>
                      <p className='location'>{location}</p>
                      <p className='range'>{range}</p>
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                      <Gallery images={images} />
                    </TabPanel>
                  );
                })}
            </Tabs>
          </TabsStyles>
        </div>
      </StyledSection>
    </Fade >
  )
}

export default Education
