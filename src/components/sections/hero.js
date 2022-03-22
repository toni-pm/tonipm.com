import React, { useState, useEffect } from 'react';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const StyledHero = styled.div`

  h1 {
    margin: 0px 0px 0px 0px;
    color: var(--primary);
    font-weight: normal;
    font-size: clamp(25px, 4.5vw, 45px);
  }

  h2, h3 {
    font-size: clamp(30px, 5vw, 50px);
  }
`

const Hero = () => {

  const one = <h1><Trans>hero_title</Trans></h1>;
  const two = <h2><Trans>hero_subtitle1</Trans></h2>;
  const three = <h3><Trans>hero_subtitle2</Trans></h3>;
  const four = (
    <>
      <p>
        <Trans>hero_content</Trans>
      </p>
    </>
  );

  const items = [one, two, three, four];
  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <section id='hero'>
        <StyledHero>
          {items.map((item, i) => (
            <div>{item}</div>
          ))}
        </StyledHero>
      </section>
    </Fade>
  )
}

export default Hero