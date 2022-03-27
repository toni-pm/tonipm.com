import React, { useState, useEffect } from 'react'
import { Trans } from 'gatsby-plugin-react-i18next'
import { skills } from 'config'
import TagCloud from 'TagCloud'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const StyledSection = styled.section`
  max-width: 900px;

  ul {
    list-style-type: none;
    padding: 0;
  }
`

const Skill = styled.div`
  width: 100%;
  background-color: #aaa;
  padding: 0;
  border-radius: 5px;
  margin: 6px 0 15px 0;

  div {
    height: 10px;
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    background-color: #eee;
    border-radius: ${props => (props.level && props.level === 100 ? '5px 5px 5px 5px;' : '5px 0px 0px 5px;')};
  }
`

const Skills = () => {
  return (
    <Fade bottom duration={800} easing='cubic-bezier(0.5, 0, 0, 1)' distance='50px'>
      <StyledSection id='skills'>
        <h2><Trans>Skills</Trans></h2>
        <div className='inner'>
          <p>
            <Trans>skills_content</Trans>
          </p>
          <ul>
            {skills && skills.map((skill, i) =>
              <li key={i}>
                <span>{skill.name}</span>
                <Skill level={skill.level}><div style={{ width: `${skill.level}%` }} /></Skill>
              </li>)}
          </ul>
          <StaticImage
            className='img'
            src='../../images/furbo.jpeg'
            width={300}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt='Furbo'
          />
        </div>
      </StyledSection>
    </Fade>
  )
}

export default Skills
