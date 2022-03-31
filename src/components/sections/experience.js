import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'
import TabsStyles from 'styles/TabsStyles'
import Gallery from '@browniebroke/gatsby-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const StyledSection = styled.section`
  max-width: 900px;
`

const Experience = () => {
  const { language } = useI18next()
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
                        width: 500
                        height: 300
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
    `)
  const experienceData = data.experience.edges.filter(edge => edge.node.frontmatter.lang === language)

  const selectTab = (btnTab, tabN) => {
    const tabcontent = document.getElementsByClassName('tabcontent-experience')
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
    }
    const tablinks = document.getElementsByClassName('tablinks-experience')
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
    }
    const elTab = document.getElementById(`experience-${tabN}`)
    if (elTab) {
      elTab.style.display = 'block'
    }
    if (btnTab) {
      btnTab.className += ' active'
    }
  }

  useEffect(() => {
    const btnTab = document.getElementById('btn-tab-experience-0')
    selectTab(btnTab, 0)
  }, [])

  return (
    <Fade right duration={800} easing='cubic-bezier(0.5, 0, 0, 1)' distance='50px'>
      <StyledSection id='experience'>
        <h2><Trans>Experience</Trans></h2>

        <div className='inner'>
          <TabsStyles className='tabs'>
            <div class='tab'>
              {experienceData &&
                experienceData.map(({ node }, i) => {
                  const { company } = node.frontmatter
                  return (
                    <button class='tablinks tablinks-experience' id={`btn-tab-experience-${i}`} key={i} onClick={e => selectTab(e.currentTarget, i)}>{company}</button>
                  )
                })}
            </div>

            <div className='tabcontents'>
              {experienceData &&
                experienceData.map(({ node }, i) => {
                  const { frontmatter, html } = node
                  const { company, title, range, url, gallery } = frontmatter
                  let images = []
                  if (gallery) {
                    images = gallery.map(node => {
                      const image = node.img.childImageSharp
                      image.caption = node.caption
                      return image
                    })
                  }

                  return (
                    <div class='tabcontent tabcontent-experience' key={i} id={`experience-${i}`}>
                      <h3>{title}</h3>
                      <a className='company default' href={url} target='_blank' rel='noreferrer'> @ {company}</a>
                      <p className='range'>{range}</p>
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                      <div className='gallery'><Gallery className='gallery' images={images} /></div>
                    </div>
                  )
                })}
            </div>
          </TabsStyles>
        </div>
      </StyledSection>
    </Fade>
  )
}

export default Experience
