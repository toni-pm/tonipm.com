import React from 'react'
import Fade from 'react-reveal/Fade'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import 'font-awesome/css/font-awesome.min.css'

const StyledSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 900px) {
      display: block;
    }
  }

  .resume {
      margin-top: 70px;
      display: flex;
      justify-content: center;
  }
`

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 900px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    position: relative;
    border-radius: var(--border-radius);
    background-color: var(--primary);
    width: 100%;

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:after {
      border: 2px solid var(--primary);
      top: 20px;
      left: 20px;
      z-index: -1;
    }

    &:hover,
    &:focus {
      background-color: transparent;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
  }
`

const About = () => {
  const { language } = useI18next()
  const resumeLink = language === 'es'
    ? '/Toni_Peraira_CV_es.pdf'
    : language === 'ca'
      ? '/Toni_Peraira_CV_ca.pdf'
      : '/Toni_Peraira_CV_en.pdf'

  return (
    <Fade bottom duration={800} easing='cubic-bezier(0.5, 0, 0, 1)' distance='50px'>
      <StyledSection id='about'>
        <h2><Trans>About Me</Trans></h2>

        <div className='inner'>
          <div>
            <Trans>about_me</Trans>
          </div>
          <div>
            <StyledPic>
              <div className='wrapper'>
                <StaticImage
                  className='img'
                  src='../../images/me.jpeg'
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt='Toni'
                />
              </div>
            </StyledPic>
            <div className='resume'>
              <a href={resumeLink} className='btn' target='_blank' rel='noopener noreferrer'>
                <i className='fa fa-download' />
                <Trans>Download Resume</Trans>
              </a>
            </div>
          </div>
        </div>
      </StyledSection>
    </Fade>
  )
}

export default About
