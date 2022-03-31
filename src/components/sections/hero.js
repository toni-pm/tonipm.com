import React, { useState, useEffect } from 'react'
import { Trans } from 'gatsby-plugin-react-i18next'
import { skills } from 'config'
import TagCloud from 'TagCloud'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const StyledHero = styled.section`
  min-height: 100vh;
  padding: 0 0 0 5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  .tagcloud {
    margin-left: 20px;
  }

  h1 {
    margin: 0px 0px 0px 0px;
    color: var(--primary);
    font-weight: normal;
    font-size: clamp(25px, 4.5vw, 45px);
  }

  h2, h3 {
    font-size: clamp(30px, 5vw, 50px);
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    margin-top: 80px !important;
  
    .tagcloud {
      margin-left: 0px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

const Hero = () => {
  const texts = skills.map(skill => skill.tagCloud ? skill.name : null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isMounted) {
      return
    }
    TagCloud('.tagcloud', texts, {
      radius: 250,
      maxSpeed: 'slow'
    })
    setIsMounted(true)
  }, [])

  const one = <h1><Trans>hero_title</Trans></h1>
  const two = <h2><Trans>hero_subtitle1</Trans></h2>
  const three = <h3><Trans>hero_subtitle2</Trans></h3>
  const four = (
    <>
      <p>
        <Trans>hero_content</Trans>
      </p>
    </>
  )

  const items = [one, two, three, four]
  return (
    <Fade bottom duration={800} easing='cubic-bezier(0.5, 0, 0, 1)' distance='50px'>
      <StyledHero id='hero'>
        <div>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
        <div className='tagcloud' />
      </StyledHero>
    </Fade>
  )
}

export default Hero
