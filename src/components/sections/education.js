import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade'
import { Trans } from 'gatsby-plugin-react-i18next';
import { education } from 'config'
import styled from 'styled-components'
import CustomTabList from 'components/tablist'

const StyledSection = styled.section`
  max-width: 900px;
`

const StyledTabList = styled.div`
`;

const Education = () => {

  return (
    <Fade left duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <StyledSection id='education'>
        <h2><Trans>Education</Trans></h2>
        <div className='inner'>


          <StyledTabList>
            <CustomTabList items={education} title={item => item.name} panel={item =>
              <div>
                <p>{item.location}</p>
                <p>{item.active ? <Trans>Present</Trans> : item.year}</p>
                <ul>
                  {item.topics && item.topics.map((topic, j) => <li key={j}><Trans>{topic}</Trans></li>)}
                </ul>
              </div>}>
            </CustomTabList>
          </StyledTabList>
        </div>
      </StyledSection>
    </Fade >
  )
}

export default Education
