import React from 'react'
import Fade from 'react-reveal/Fade'
import { Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;


const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
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
`;

const About = () => {
  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <StyledSection>
        <section id='about'>
          <h2><Trans>About Me</Trans></h2>

          <div className='inner'>
            <div>
              <Trans>about_me</Trans>
            </div>
            <StyledPic>
              <div className='wrapper'>
                <StaticImage
                  className="img"
                  src="../../images/me1.jpeg"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Toni"
                />
              </div>
            </StyledPic>
          </div>
        </section>
      </StyledSection>
    </Fade>
  )
}

export default About
