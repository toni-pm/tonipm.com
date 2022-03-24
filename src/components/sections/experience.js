import React from 'react'
import Fade from 'react-reveal/Fade'
import { Trans } from 'gatsby-plugin-react-i18next';
import { experience } from 'config'
import styled from 'styled-components'
import CustomTabList from 'components/tablist'

const StyledSection = styled.section`
  max-width: 900px;
`

const Experience = () => {
  return (
    <Fade right duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <StyledSection id='experience'>
        <h2><Trans>Experience</Trans></h2>

        <div className='inner'>
          <div>
            <CustomTabList items={experience} title={item => item.company} panel={item =>
              <div>
                <h3>{item.job}</h3>
                <p>{item.start} - {item.active ? <Trans>Present</Trans> : item.end}</p>
                <ul>
                  {item.functions && item.functions.map((func, j) => <li key={j}><Trans>{func}</Trans></li>)}
                </ul>
              </div>}>
            </CustomTabList>
          </div>
        </div>
      </StyledSection>
    </Fade>
  )
}

export default Experience
