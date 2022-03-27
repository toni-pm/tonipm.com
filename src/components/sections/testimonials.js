import React from 'react'
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const StyledSection = styled.section`
  max-width: 900px;

  .carousel-root {
    width: 60%;
    margin: auto;
  }
  
  .carousel .slide img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
  
  .myCarousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0,0,0,0.1);
    margin-top: -10%;
    padding-top: 10%;
    height: 250px;
  }
  
  .carousel .control-dots {
    padding-left: 5px !important;
    outline: 0;
    margin: 0 0 5px 0;
  }
  
  .myCarousel h3 {
    font-weight: 100;
    letter-spacing: 0.2px;
    margin-bottom: 4px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 17px;
  }
  
  .myCarousel h4 {
    text-transform: uppercase;
    margin: 0 0 5px 0;
    line-height: 25px;
    padding-top: 0;
    font-weight: 500;
    color: #787878;
    font-size: 14px;
  }
  
  .myCarousel p {
    font-weight: 100;
    color: #fff;
    margin: 0;
    font-size: 15px;
    padding: 0 40px;
  }
  
  .myCarousel p:before {
    content: "“";
    color: #aaa;
    font-size: 26px;
    font-family: monospace;
    font-weight: 100;
  }
  
  .myCarousel p:after {
    content: "”";
    color: #aaa;
    font-size: 26px;
    font-family: monospace;
    font-weight: 100;
    line-height: 0;
  }
  
  .carousel .control-dots .dot {
    box-shadow: none !important;
    background: #454545 !important;
    outline: 0;
  }
  
  .carousel.carousel-slider .control-arrow {
    background: #000 !important;
    height: 50px !important;
    position: absolute;
    top: 50% !important;
  }
  
  @media only screen and (max-width: 500px) {
    .carousel-root {
      width: 100% !important;
    }
  
    .carousel.carousel-slider .control-arrow {
      display: none !important;
    }
  }
`

const Testimonials = () => {
  const { language } = useI18next()
  const data = useStaticQuery(graphql`
        query {
          testimonials: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/testimonials/" } }
          ) {
            edges {
              node {
                html
                frontmatter {
                    lang
                    testimonials {
                        name
                        title
                        quote
                        img {
                        childImageSharp {
                          gatsbyImageData(
                            width: 200
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                          )
                        }
                    }
                }
                }
              }
            }
          }
        }
      `)
  const testimonials = data.testimonials.edges.filter(edge => edge.node.frontmatter.lang === language)

  return (
    <Fade bottom duration={800} easing='cubic-bezier(0.5, 0, 0, 1)' distance='50px'>
      <StyledSection id='testimonials'>
        <div className='inner'>
          {testimonials && testimonials.map(({ node }, i) =>
            <Carousel
              showArrows
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              autoPlay={false}
              interval={6100}
            >
              {
                node.frontmatter.testimonials && node.frontmatter.testimonials.map((testimonial, i) => {
                  const { name, title, quote, img } = testimonial
                  const image = getImage(img)
                  return (
                    <div>
                      <GatsbyImage image={image} />
                      <div className='myCarousel'>
                        <h3>{name}</h3>
                        <h4>{title}</h4>
                        <p>
                          {quote}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </Carousel>
          )}
        </div>
      </StyledSection>
    </Fade>
  )
}

export default Testimonials
